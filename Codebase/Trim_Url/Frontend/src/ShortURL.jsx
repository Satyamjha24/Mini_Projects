import React, { useState } from 'react';

const ShortURL = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShortenUrl = async () => {
        try {
          const response = await fetch('https://urltrim.onrender.com/url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: originalUrl }),
          });
          const data = await response.json();
          setShortenedUrl(`https://urltrim.onrender.com/url/${data.id}`);
        } catch (error) {
          console.error('Error shortening URL:', error);
        }
      };
    
  return  (
    <div>
      <h1 style={{color:'red'}}>URL Shortener</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your long URL"
          style={{padding:"10px", height:"25px", width: "250px", margin:"10px", borderRadius:"10px", fontSize:"20px", fontWeight:"bold"}}
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button onClick={handleShortenUrl} style={{color:'white', height:"45px",  margin:"10px", borderRadius:"10px", fontSize:"20px", backgroundColor:"rgb(65, 163, 238)"}}>Shorten</button>
      </div>
      <br />
      {shortenedUrl && (
        <div>
          <h2 style={{color:'black'}}>Shortened URL :</h2>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:"30px"}}>
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
export default ShortURL