import axios from "axios";
import { useState, useEffect } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, VersionedTransaction } from "@solana/web3.js";
import { Buffer } from "buffer";
import { notification } from "antd";

function Card() {
  const [data, setData] = useState([]);
  const [nfts, setNfts] = useState([]);
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const { connection } = useConnection();
  useEffect(() => {
    fetchData();
  }, [nfts.length > 0]);

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
        setNfts(result?.result?.map((nfts) => nfts.nft_address));
      })
      .catch((error) => console.log("error", error));
    console.log(nfts);
    if (nfts.length > 0) {
      var raw1 = JSON.stringify({
        network: "devnet",
        token_addresses: nfts,
        refresh: false,
        token_record: true,
      });
      var requestOptions1 = {
        method: "POST",
        headers: myHeaders,
        body: raw1,
        redirect: "follow",
      };
      fetch("https://api.shyft.to/sol/v1/nft/read_selected", requestOptions1)
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    }
  };
  const buy = (mint, price) => {
    console.log(price);
    console.log(mint);
    var raw = JSON.stringify({
      network: "devnet",
      marketplace_address: "2RkvPdnYmqYptXHcgpFT1wLqwff2HgqHoZvUcbgh3Sy6",
      nft_address: mint,
      price: Number(price),
      seller_address: "L3x4bNVQsm17ep3uMR77zHKsSP3Q75qN7kxaJu5Cjbu",
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
      {data.result?.map((vocher, index) => (
        <div key={index} class="col-3">
          <div class="box_section">
            <div class="card">
              <img
                src="./images/type=detail.webp"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title">{vocher.name}</h6>
                <p class="card-text">{vocher.attributes.price}$</p>
                <p class="card-text">{vocher.attributes.percent * 100}%</p>
                <p class="card-text">{vocher.description}</p>
                <button
                  onClick={() => buy(vocher.mint, vocher.attributes.price)}
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
