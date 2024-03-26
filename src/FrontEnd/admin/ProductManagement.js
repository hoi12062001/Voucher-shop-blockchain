import axios from "axios";
import { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, VersionedTransaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import { notification } from "antd";
function ProductManagement() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(); // Gọi hàm fetchData trong useEffect để nó chỉ gọi một lần khi component được render
  }, []);
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/voucher");
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "nTAETNpPo6oEoFHO");
    myHeaders.append("Content-Type", "application/json");
    const token_addresses = response.data.map((item) => item.mint);
    console.log(token_addresses);
    var raw = JSON.stringify({
      network: "devnet",
      token_addresses: token_addresses,
      refresh: false,
      token_record: true,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.shyft.to/sol/v1/nft/read_selected", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };
  const marketPlace = (mint, price) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "nTAETNpPo6oEoFHO");
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      network: "devnet",
      marketplace_address: "2RkvPdnYmqYptXHcgpFT1wLqwff2HgqHoZvUcbgh3Sy6",
      nft_address: mint,
      price: price,
      seller_wallet: "L3x4bNVQsm17ep3uMR77zHKsSP3Q75qN7kxaJu5Cjbu",
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("https://api.shyft.to/sol/v1/marketplace/list", requestOptions)
      .then((response) => response.json())
      .then(async (result) => {
        console.log(result.result.encoded_transaction);
        if (!signTransaction)
          throw new Error("Wallet does not support transaction signing!");
        const solanaTransaction = getRawTransaction(
          result.result.encoded_transaction
        );
        const {
          context: { slot: minContextSlot },
          value: { blockhash, lastValidBlockHeight },
        } = await connection.getLatestBlockhashAndContext();
        const signature = await sendTransaction(solanaTransaction, connection, {
          minContextSlot,
        });
        console.log("Transaction sent:", signature);

        await connection.confirmTransaction({
          blockhash,
          lastValidBlockHeight,
          signature,
        });
      });
    notification.success({ message: "Post NFT to marketplace completed" });
  };
  return (
    <div class="container ">
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <a href="AddProduct">
          <button class="btn btn-success my-2">Thêm mã giảm giá</button>
        </a>

        <table
          class="table table-striped"
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>description</th>
              <th>price</th>
              <th>percent</th>
              <th>mint</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data?.result?.map((voucher, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{voucher.name}</td>
                <td>{voucher.description}</td>

                <td>{voucher.attributes.price}</td>
                <td>{voucher.attributes.percent}</td>
                <td>{voucher.mint}</td>
                <td class="d-flex">
                  <a
                    href="EditProduct"
                    style={{ marginLeft: "1rem", marginRight: "1rem" }}
                  >
                    <button class="btn btn-warning ">Sửa</button>
                  </a>
                  <button
                    onClick={() =>
                      marketPlace(voucher.mint, voucher.attributes.price)
                    }
                    class="btn btn-primary"
                    title="post NFT to marketpalce"
                  >
                    Marketplace
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductManagement;
function getRawTransaction(encodedTransaction) {
  let recoveredTransaction;
  try {
    recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, "base64")
    );
  } catch (error) {
    recoveredTransaction = VersionedTransaction.deserialize(
      Buffer.from(encodedTransaction, "base64")
    );
  }
  return recoveredTransaction;
}
