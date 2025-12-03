// src/theme/components/islands/QRButtonIsland.jsx
import React, { useState, useRef } from "react";
import styles from "../../styles/home.module.css";

export default function QRButtonIsland({ fieldValues }) {
  const { defaultUrl } = fieldValues || {};
  const [inputUrl, setInputUrl] = useState(defaultUrl || "");
  const [qrCode, setQrCode] = useState("");
  const qrRef = useRef();

  function handleGenerate() {
    if (!inputUrl.trim()) return;
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(inputUrl)}`;
    setQrCode(qr);
  }

  function handleDownload() {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr-code.png";
    link.click();
  }

  return (
    <div className={styles.qrLandingBox}>
      <input
        type="text"
        placeholder="Enter URL to generate QR code"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        className={styles.qrInputLanding}
      />
      <button onClick={handleGenerate} className={styles.ctaLanding}>
        Generate QR Code
      </button>

      {qrCode && (
        <div className={styles.qrDisplay}>
          <img ref={qrRef} src={qrCode} alt="QR Code" className={styles.qrImageLanding} />
          <button onClick={handleDownload} className={styles.ctaLandingDownload}>
            Download QR
          </button>
        </div>
      )}
    </div>
  );
}
