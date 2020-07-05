import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [qrImage, setQrImage] = useState(null);
  const [text, setText] = useState("");
  useEffect(() => {}, []);

  const onSubmit = () => {
    QRCode.toDataURL(text)
      .then((url) => {
        setQrImage(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="App">
      <img src={qrImage} alt="qr" />
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={onSubmit} style={{ marginTop: 5 }}>
        submit
      </button>
    </div>
  );
}

export default App;
