import axios from "axios";
import { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, VersionedTransaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import { notification } from "antd";

function Card() {
  const [data, setData] = useState([]);
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    fetchData();
  }, [data.length > 0]);

  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "nTAETNpPo6oEoFHO");
  myHeaders.append("Content-Type", "application/json");

  const fetchData = async () => {
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      "https://api.shyft.to/sol/v1/marketplace/active_listings?network=devnet&marketplace_address=2RkvPdnYmqYptXHcgpFT1wLqwff2HgqHoZvUcbgh3Sy6",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.result);
      })
      .catch((error) => console.log("error", error));
  };
  console.log(data);
  const buy = (mint, price, seller_address) => {
    var raw = JSON.stringify({
      network: "devnet",
      marketplace_address: "2RkvPdnYmqYptXHcgpFT1wLqwff2HgqHoZvUcbgh3Sy6",
      nft_address: mint,
      price: Number(price),
      seller_address: seller_address,
      buyer_wallet: publicKey,
      service_charge: {
        receiver: "499qpPLdqgvVeGvvNjsWi27QHpC8GPkPfuL5Cn2DtZJe",
        amount: 0.01,
      },
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.shyft.to/sol/v1/marketplace/buy", requestOptions)
      .then((response) => response.json())
      .then(async (result) => {
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
        notification.success({
          message: `Thành công, transaction:${signature}`,
        });
        await connection.confirmTransaction({
          blockhash,
          lastValidBlockHeight,
          signature,
        });
      });
  };
  return (
    <>
      {data?.map((voucher, index) => (
        <div key={index} class="col-3">
          <div class="box_section">
            <div class="card">
              <img
                src="./images/type=detail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">{voucher.nft.name}</h6>
                <p class="card-text">{voucher.nft.attributes.price}$</p>
                <p class="card-text">{voucher.nft.attributes.percent * 100}%</p>
                <p class="card-text">{voucher.nft.description}</p>
                <button
                  onClick={() =>
                    buy(
                      voucher.nft.mint,
                      voucher.nft.attributes.price,
                      voucher.seller_address
                    )
                  }
                  class="btn btn-primary"
                >
                  Mua
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
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
export default Card;
