import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Upload } from "antd";
import  Link from "next/link"
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
    const router = useRouter();
    console.log(router.route);
    const d = new Date();

    
    // add a retailers state to hold the array of retailers
    const [retailers, setRetailers] = useState([]);

    // add a function to handle adding a retailer to the array
    const handleAddRetailer = (retailer) => {
        setRetailers([...retailers, retailer]);
    };

    


    // for input of images
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };


    const onFinish = async values => {
        const d = new Date();
        const joinedAt = d.toISOString();
        const data = { ...values, joinedAt, orders: [{}],retailers };
        const response = await axios({
            method: "POST",
            data: data,
            url: "http://localhost:8000/user/register",
        });

        const status = response.data.code;

        if (status == 200) {
            localStorage.setItem(
                "token",
                response.data.data[0]["access token"],
            );
            location.href = "http://localhost:3000/";
            toast("Registered Successsfully!");
        } else {
            toast("Username must be unique!");
        }
    };
    return (
        <>
            <Form
                className="m-auto w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <div className="flex">
                    <h5 class="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white underline-offset-4 underline">Execute for Manufacturer</h5>
                </div>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}>
                    <Input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    type="email" placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Enter unique username!",
                        },
                    ]}>
                    <Input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    type="text" placeholder="Username"
                     />
                </Form.Item>

              
                
                {/* <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div> */}

                <div className="text-center pt-8">
                    <span className="font-bold text-lg">Add Images of the product below </span>
                    <br/>
                    <span className=" font-normal">(You can add multiple images, one at a time)</span>
                </div>
                
                <Form.Item
                    className="my-6"
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>

                <div className="text-center pt-8">
                    <span className="font-bold text-lg">Add names of Retailers below </span>
                    <br/>
                    <span className=" font-normal">(Select add user to add multiple retailers)</span>
                </div>




{/* Retailer data--------------------------------------------
----------------------------------------------------------- */}
{/* Add retailer input */}
                <Form.Item
                    label="Retailer"
                    name="retailer"
                    rules={[{ required: true, message: 'Please input retailer name' }]}
                >
                    <Input placeholder="Enter retailer name" />
                </Form.Item>

                  {/* Button to add retailer */}
                  <Button type="primary" onClick={() => handleAddRetailer(values.retailer)}>Add retailer</Button>






                <ToastContainer />
                <Form.Item>
                    <Button
                        type="primary"
                        className="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 p-2.5 pb-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Execute Product
                    </Button>
                </Form.Item>
            </Form>
            

        </>
    )
}

export default RegisterForm;