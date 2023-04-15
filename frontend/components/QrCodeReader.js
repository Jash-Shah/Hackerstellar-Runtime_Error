import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('NoData');

  return (
    <div className='dark:bg-gray-900 bg-white '>
      <div >
        <h1 className='dark:text-white text-center pt-4 font-bold'>Scan Here</h1>
        <div className='mx-auto'  style={{ width: '300px', height: '300px' }}>
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>
     
      <p className='text-3xl font-bold dark:text-purple-800 text-center'>{data}</p>
      {data!=="NoData"?(<h1 className='text-center dark:text-white font-bold'>We can redirect to any Specific Page Now with props </h1>):(<h1 className='text-center font-bold mt-2  dark:text-white'>Scan the QR Properly</h1>)}
    </div>
  );
};


// npm install --save react-qr-reader  --legacy-peer-deps 
export default Test;
