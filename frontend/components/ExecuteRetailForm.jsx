import React, { useState, useEffect } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connectWallet from "../connectWallet.js";

function RegisterForm() {
    const router = useRouter();

    const onFinish = async values => {
        try {
            const wallet = await connectWallet();

            const count = await wallet.contract.productCount();
            console.log(count);

            const execute = await wallet.contract.signProduct(values.productID);

            if (execute) {
                toast("Product verified successfully!");
                router.push("/");
                return;
            }

            toast("Cannnot verify product!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form
                className="m-auto w-full max-w-2xl my-24 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <div className="flex">
                    <h5 class="m-auto mb-4 text-xl font-medium dark:text-white underline-offset-4 underline text-red-700">
                        Execute for Retailer
                    </h5>
                </div>

                {/* Adding the product details and name */}
                <Form.Item
                    className="px-6 md:px-20 text-center dark:text-white  "
                    name="productID"
                    label={<span className="dark:text-white">Product ID</span>}
                    rules={[
                        {
                            required: true,
                            message: "Please input the Product ID",
                        },
                    ]}>
                    <Input placeholder="product id" />
                </Form.Item>

                <Form.Item
                    className="px-6 md:px-20 text-center dark:text-white  "
                    name="username"
                    label={<span className="dark:text-white">Username</span>}
                    rules={[
                        {
                            required: true,
                            message: "Please input your username",
                        },
                    ]}>
                    <Input placeholder="username" />
                </Form.Item>

                <ToastContainer />
                <Form.Item className="flex justify-center">
                    <Button
                        type="primary"
                        className=" mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Sign Product
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default RegisterForm;
