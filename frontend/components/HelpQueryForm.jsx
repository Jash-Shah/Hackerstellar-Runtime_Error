import React, { useState } from 'react';
import { Form, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const HelpQueryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!', name, email, query);
    // Reset form fields
    setName('');
    setEmail('');
    setQuery('');
  }

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (

    <div className=''>
      {/* the old section of help query */}
      {/* <div> */}
      <div className="m-auto w-full max-w-4xl p-4 bg-white-400 border rounded-lg sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Need Help?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2 dark:text-white">
            Name:
            <input
              type="text"
              id="name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="block mb-2 dark:text-white mt-4">
            Email:
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="query" className="block mb-2 mt-4 dark:text-white">
            Query:
            <textarea
              id="query"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>

          <Form.Item
            className="my-6"
            name="upload"
            label={<span className='dark:text-white'>Upload</span>}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload className='dark:text-white' name="logo" action="/upload.do" listType="picture">
              <Button className='dark:text-white' icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <button
            type="submit"
            className="mt-4 w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        {/* </div> */}
      </div>
      <br></br>
      <div className="flex mt-4 mb-12 pt-4">
        <section className="bg-white text-black dark:bg-gray-900 dark:text-white w-max px-4">
          <h2 className="font-bold text-3xl mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <dl>
            <dt className="font-bold">Q: What is VeriTrack?</dt>

            <dd>
              A: VeriTrack is a blockchain-based supply chain tracking web app that allows manufacturers, retailers, and consumers to securely track and verify the movement of goods in the supply chain, ensuring transparency and authenticity.
            </dd>

            <dt className="font-bold mt-4">
              Q: How does VeriTrack work?
            </dt>
            <dd>
              A: VeriTrack uses blockchain technology to create an immutable and transparent record of all transactions and movements of goods in the supply chain. Manufacturers, retailers, and other stakeholders can enter data into the blockchain, which is then securely stored and can be verified by all parties involved.
            </dd>

            <dt className="font-bold mt-4">
              Q: How can I get started with VeriTrack as a manufacturer?
            </dt>
            <dd>
              A: To get started as a manufacturer on VeriTrack, you need to create an account, set up your supply chain profile, and start inputting data related to your products, shipments, and other relevant information. You can then invite your partners, such as retailers or logistics providers, to join your supply chain network on VeriTrack.
            </dd>
            <dt className="font-bold mt-4">
              Q: How can I get started with VeriTrack as a retailer?
            </dt>
            <dd>
              A: As a retailer, you can join a manufacturer's supply chain network on VeriTrack by accepting their invitation. Once you have access, you can view and verify the products' movement in the supply chain, track their authenticity, and ensure they meet your quality standards.
            </dd>
          </dl>
        </section>
      </div>
    </div>

  );
}

export default HelpQueryForm;