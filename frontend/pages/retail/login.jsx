import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const router = useRouter();

    const onFinish = async values => {
        console.log(values);
        const response = await axios({
            method: "POST",
            data: values,
            url: "http://localhost:8000/user/login",
        });

        const status = response.data.code;

        if (status == 200) {
            localStorage.setItem(
                "token",
                response.data.data[0]["access token"],
            );
            toast("Logged Successsfully!");
            location.href = "http://localhost:3000/";
        } else {
            toast("Invalid credentials!");
        }
    };
    return (
        <>
            <Head>
                <title>Retail Login</title>
            </Head>
            <div className="grid h-screen place-items-center">
            <Form
                className="m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <div className="flex">
                    <h5 class="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white">Login to the System</h5>
                </div>
                <div>
                    <Form.Item
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        label="Username"
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
                        label="Password"
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
                    <div class="flex items-start mb-4">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <Button
                        type="primary"
                        className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Login
                    </Button>
                    <div class="text-sm mt-2 font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </Form.Item>

            </Form>
            </div>
        </>
    );
};

export default App;
