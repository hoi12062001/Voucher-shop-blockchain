import { Button, Form, Input, Modal, notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { createNFT } from "../../services/Nft";
import Sign from "../../Components/auth/Sign";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction, VersionedTransaction } from "@solana/web3.js";
import bs58 from "bs58";
import {
  WalletConnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { Buffer } from "buffer";

const ERROR_MESSAGE = "Vui lòng nhập vào trường này";
const SUCCESS_MESSAGE = "Thành công";
const FAILURE_MESSAGE = "Thất bại";

function AddProduct() {
  const [transaction, setTransaction] = useState("");
  const [time, setTime] = useState(null);
  const [sign, setSign] = useState(false);
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();
  const onFinish = async (values) => {
    const addressWallet = publicKey;
    const network = "devnet";
    const { name, symbol, description, max_supply, royalty, price } = values;

    const attributes = JSON.stringify([
      { trait_type: "price", value: 0.3 },
      { trait_type: "percent", value: 0.3 },
    ]);

    let formData = new FormData();
    formData.append("network", network);
    formData.append("creator_wallet", addressWallet);
    formData.append("name", name);
    formData.append("symbol", symbol);
    formData.append("description", description);
    formData.append("attributes", attributes);
    formData.append("max_supply", max_supply);
    formData.append("royalty", royalty);
    formData.append("price", price);

    try {
      if (formData) {
        if (!publicKey) throw new Error("Wallet not connected!");
        if (!signTransaction)
          throw new Error("Wallet does not support transaction signing!");
        console.log(signTransaction);
        const res = await createNFT(formData);
        if (res) {
          const data = await axios.post("http://localhost:3000/voucher", {
            mint: res.data.result.mint,
          });
          // return data;
        }
        if (!res?.data?.success) {
          throw new Error(ERROR_MESSAGE);
        }
        console.log(res.data.result.encoded_transaction);
        console.log(description);
        const solanaTransaction = getRawTransaction(
          res.data.result.encoded_transaction
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
        setTransaction(description);
        setSign(true);
        console.log(sign);
        const timeID = setTimeout(() => {
          notification.error({ message: ERROR_MESSAGE });
        }, 10000);
        setTime(timeID);

        notification.success({ message: SUCCESS_MESSAGE });
      }
    } catch (error) {
      console.error(error);
      notification.error({ message: FAILURE_MESSAGE });
    }
  };

  return (
    <>
      <Form onFinish={onFinish} autoComplete="off">
        <div style={{ minWidth: "600px", backgroundColor: "" }}>
          <Form.Item
            label="Name *"
            name="name"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input placeholder="Tên mã giảm giá" />
          </Form.Item>

          <Form.Item
            label="Symbol *"
            name="symbol"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input placeholder="Nhập Symbol" />
          </Form.Item>

          <Form.Item
            label="Description *"
            name="description"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input.TextArea
              placeholder="Mô tả mã giảm giá"
              style={{ resize: "none", minHeight: "100px" }}
            />
          </Form.Item>

          <Form.Item
            label="Price *"
            name="price"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input placeholder="Giá" />
          </Form.Item>
          <Form.Item
            label="Max Supply"
            name="max_supply"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Royalty"
            name="royalty"
            rules={[{ required: true, message: ERROR_MESSAGE }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </div>
      </Form>
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

export default AddProduct;
