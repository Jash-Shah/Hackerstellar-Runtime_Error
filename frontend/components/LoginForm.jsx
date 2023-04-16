import React from "react";
import { Button, Form, Input, Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import connectWallet from "../connectWallet.js";

function LoginForm() {
    const router = useRouter();

    const onFinish = async values => {
        const response = await axios({
            method: "POST",
            data: values,
            url: `${process.env.API_URL}/user/login/`,
        });

        const user = response.data;

        const status = response.status;

        if (status == 200) {
            const wallet = await connectWallet();
            console.log(wallet);

            localStorage.setItem("username", user.username);
            toast("Logged Successsfully!");
            location.href = process.env.WEB_URL + "/";
        } else {
            toast("Invalid credentials!");
        }
    };

    return (
        <>
            <Form
                className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <div className="flex">
                    <h5 className="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white">
                        Login to VeriTrack
                    </h5>
                </div>
                <div>
                    <Form.Item
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        label={<label className="dark:text-white">Username</label>}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}>
                        <Input type="text" placeholder="name@example.com" />
                    </Form.Item>
                </div>
                <div>
                    <Form.Item
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        label={<label className="dark:text-white">Password</label>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}>
                        <Input.Password placeholder="********" />
                    </Form.Item>
                </div>

                <Form.Item>
                    <div className="flex items-start mb-4">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <Button
                        type="primary"
                        className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Login
                    </Button>
                    <div className="text-sm mt-2 font-medium text-gray-500 dark:text-gray-300">
                        Not registered?{" "}
                        <a
                            href="/register"
                            className="text-blue-700 hover:underline dark:text-blue-500">
                            Create an account
                        </a>
                    </div>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginForm;
