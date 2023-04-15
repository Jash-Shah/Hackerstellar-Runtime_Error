import React, { useState } from 'react';
import {Form, Upload, Button } from 'antd';
import { InboxOutlined, UploadOutlined,ArrowRightOutlined } from '@ant-design/icons';


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
       <div className="flex mb-12 pt-4">
                <section className="bg-white text-black dark:bg-gray-900 dark:text-white w-max px-4">
                    <h2 className="font-bold text-3xl mb-4">
                        Frequently asked questions(FAQs)
                    </h2>
                    <dl>
                        <dt className="font-bold">How to use our website?</dt>
                        
                        <dd>
        
                            You can add your daily life expenses as transactions
                            and understand how are your expenses as compared to
                            ideal expenses.
                        </dd>

                        <dt className="font-bold mt-4">
                            Who can use our website?
                        </dt>
                        <dd>
                            Anybody with age greater than 12 can use our
                            website, childs can also manage their expense on the
                            basis of their pocketmoney.
                        </dd>

                        <dt className="font-bold mt-4">
                            Why to use our website?
                        </dt>
                        <dd>
                            It will help you manage your expenses in the best
                            way, save money for any emergency and for future
                            planing.
                        </dd>
                    </dl>
                </section>
                </div>

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
    </div>
   
  );
}

export default HelpQueryForm;