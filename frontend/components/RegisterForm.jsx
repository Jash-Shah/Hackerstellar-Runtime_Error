import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connectWallet from "../connectWallet.js";
import { ethers } from "ethers";

function RegisterForm() {
    const router = useRouter();
    console.log(router.route);

    const [type, setType] = useState("User");

    const onRadioChange = e => {
        console.log("Radio Checked", e.target.value);
        setType(e.target.value);
    };

    const onFinish = async values => {
        if (!ethers.utils.isAddress(values.address)) {
            toast("Enter correct wallet address!");
            return;
        }

        const response = await axios({
            method: "POST",
            data: { ...values, typeofuser: type },
            url: `${process.env.API_URL}/user/register/`,
        });

        const user = response.data;

        const status = response.status;

        if (status == 201) {
            // connecting to wallet
            const object = await connectWallet();
            console.log(object);

            localStorage.setItem("username", user.username);
            toast("Registered Successsfully!");
            location.href = process.env.WEB_URL + "/";
        } else {
            toast("Username must be unique!");
        }
    };
    return (
        <>
            <Form
                className="m-auto w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:text-white sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-white"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <div className="flex">
                    <h5 className="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Register for VeriTrack
                    </h5>
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
                    <Input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:placeholder-slate-500"
                        type="email"
                        placeholder="Email Address"
                    />
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
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:placeholder-slate-500"
                        type="text"
                        placeholder="Username"
                    />
                </Form.Item>

                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input
                        type="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:placeholder-slate-500"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: "Enter Wallet Address!",
                        },
                    ]}>
                    <Input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:placeholder-slate-500"
                        type="text"
                        placeholder="Wallet address"
                    />
                </Form.Item>

                <ToastContainer />

                <div className="mb-2 mt-12 flex-col content-center">
                    <p className="block  font-medium text-gray-700 dark:text-gray-300">
                        I am a:{" "}
                    </p>{" "}
                    <Radio.Group onChange={onRadioChange} value={type}>
                        <Radio value={"User"} className="dark:text-white">
                            User
                        </Radio>
                        <Radio value={"Retailer"} className="dark:text-white">
                            Retailer
                        </Radio>
                        <Radio
                            value={"Manufacturer"}
                            className="dark:text-white">
                            Manufacturer
                        </Radio>
                    </Radio.Group>
                </div>

                <p className="mb-2 mt-12">
                    {" "}
                    If you've already registered,
                    <a href="/login" className="text-blue-700 ">
                        {" "}
                        Login?{" "}
                    </a>{" "}
                </p>
                <Form.Item>
                    <Button
                        type="primary"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default RegisterForm;
