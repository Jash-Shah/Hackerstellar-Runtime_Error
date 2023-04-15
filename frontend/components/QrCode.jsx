import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Button, Space } from 'antd';


function QrCode() {
  const [text, setText] = useState("akshay");

  function generateQR(e) {
    setText(e.target.value);
  }

  return (
    <div className='bg-white dark:bg-gray-900 items-center justify-center flex flex-col '>
      <h1 className='dark:text-white py-4 font-bold text-xl text-center'>Generated QR for the Key is</h1>
      <QRCode className='flex px-auto text-center' value={text} />

      <div className='input-here mt-6 dark:text-white'>
        <p className='font-semibold'>Enter your text here</p>
        <input className="border mr-4 dark:text-black  " type="text" value={text} onChange={generateQR} />
        <Button className='dark:text-white'>Generate</Button>
      </div>
    </div>
  );
}

export default QrCode;
