import { useState, useEffect } from "react";
import axios from "axios";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

const ListAll = () => {
  const xKey = "nTAETNpPo6oEoFHO";
  const [wallID, setWallID] = useState("");
  const [network, setNetwork] = useState("devnet");
  const [isLoaded, setLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState();
  const [connStatus, setConnStatus] = useState(false);
  localStorage.setItem("privateKey", xKey);
  // Phantom Adaptor
  const solanaConnect = async () => {
    console.log("clicked solana connect");
    const { solana } = window;
    if (!solana) {
      alert("Please Install Solana");
    }

    try {
      //const network = "devnet";
      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const rpcUrl = clusterApiUrl(network);
      const connection = new Connection(rpcUrl, "confirmed");
      const wallet = {
        address: phantom.publicKey.toString(),
      };

      if (wallet.address) {
        localStorage.setItem("adressWallet", wallet.address);

        setWallID(wallet.address);
        const accountInfo = await connection.getAccountInfo(
          new PublicKey(wallet.address),
          "confirmed"
        );
        console.log(accountInfo);
        setConnStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchNFTs = () => {
    //Note, we are not mentioning update_authority here for now
    let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}`;
    axios({
      // Endpoint to send files
      url: nftUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": xKey,
      },
      // Attaching the form data
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data);

        setDataFetched(res.data);
        setLoaded(true);
      })

      // Catch errors if any
      .catch((err) => {
        console.warn(err);
      });
  };
  useEffect(() => {
    fetchNFTs();
  }, []);
  return (
    <div className="grd-back">
      <div className="container-lg">
        {!connStatus && (
          <div className="">
            <div className="card-body text-center">
              <button
                className="badge rounded-pill bg-dark"
                onClick={solanaConnect}
              >
                Kết nối tới ví
              </button>
              {/* <select
                className="form-select"
                onChange={(e) => {
                  console.log(e.target.value);
                  e.target.value === "mtmsk" ? mtmskConnect() : solanaConnect();
                }}
              >
                <option value="none">Connect</option>
                <option value="phntm">Phantom</option>
              </select> */}
            </div>
          </div>
        )}
        {connStatus && (
          <div class="parent">
            <div class="text-light rounded-pill bg-dark ellipsis">{wallID}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListAll;
