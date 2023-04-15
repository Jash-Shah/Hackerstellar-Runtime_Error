import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Upload } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
    const router = useRouter();
    console.log(router.route);
    const d = new Date();

    

    const onFinish = async values => {
        const d = new Date();
        const joinedAt = d.toISOString();
        const data = { ...values, joinedAt, orders: [{}] };
        // console.log(data);
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
                    <h5 class="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white underline-offset-4 underline">Execute for Customer</h5>
                </div>

                {/* Adding the product details and name */}
                <Form.Item
                className="px-6 md:px-20 text-center dark:text-white  "
                    name="productID"
                    label={<span className="dark:text-white">Product ID</span>}
                    rules={[
                    {
                        required: true,
                        message: 'Please input the Product ID',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
          

                <ToastContainer />
                <Form.Item className="flex justify-center">
                    <Button
                        type="primary"
                        className=" mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 p-2.5 pb-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Execute Product
                    </Button>
                </Form.Item>
            </Form>
            

        </>
    )
}

export default RegisterForm;