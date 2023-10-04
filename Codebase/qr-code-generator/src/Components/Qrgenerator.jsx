import React, { useState } from "react";

function Qrgenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = () => {
    if (!inputValue) {
      alert("Please enter some text before generating the QR code.");
      setQrCode("");
      return;
    }
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${inputValue}`;
    setQrCode(qrCodeUrl);
    setInputValue("");
  };

  const downloadQRCode = async () => {
    try {
      const response = await fetch(qrCode);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.jpg";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">QR Code Generator</h1>
      <div className="bg-white p-4 rounded shadow-xl p-2">
        <input
          type="text"
          className="w-full p-2 border rounded font-bold text-xl"
          placeholder="Enter text or URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-center space-x-12 mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-bold text-xl rounded hover:bg-blue-600 cursor-pointer"
            onClick={generateQRCode}
          >
            Generate
          </button>
          <button
            className={`px-4 py-2 text-white font-bold text-xl rounded ${
              !qrCode
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={downloadQRCode}
            disabled={!qrCode}
          >
            Download
          </button>
        </div>
        {qrCode && (
          <div className="mt-6 ">
            <img src={qrCode} alt={inputValue} className="w-80  h-80 mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Qrgenerator;
