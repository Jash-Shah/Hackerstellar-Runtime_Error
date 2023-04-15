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
            <Form
                className="m-auto mt-8 p-4 pt-8 rounded-xl dark:bg-gray-400 bg-gray-300"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 400 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                    className="dark:text-white"
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input type="text" placeholder="username" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password placeholder="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        className="bg-gray-700 dark:bg-slate-900 mt-4 rounded-lg"
                        htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default App;
