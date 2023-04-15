import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    const router = useRouter();
    console.log(router.route);
    const d = new Date();

    const onFinish = async values => {
        const d = new Date();
        const joinedAt = d.toISOString();
        const data = { ...values, joinedAt, orders: [{}] };
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
            toast("Registered Successsfully!");
            location.href = "http://localhost:3000/";
        } else {
            toast("username must be unique!");
        }
    };

    return (
        <>
            <Head>
                <title>Retail Register</title>
            </Head>
            <Form
                className="m-auto my-10 py-4 p-4 pt-8 rounded-xl dark:bg-gray-400 bg-gray-300"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 400 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                    className="dark:text-white"
                    label="Name"
                    name="name"
                    style={{ color: "white" }}
                    rules={[{ required: true, message: "Enter your name!" }]}>
                    <Input type="text" placeholder="Your name" />
                </Form.Item>
                <Form.Item
                    className="dark:text-white"
                    label="Username"
                    name="username"
                    style={{ color: "white" }}
                    rules={[
                        {
                            required: true,
                            message: "Enter unique username!",
                        },
                    ]}>
                    <Input type="text" placeholder="Username" />
                </Form.Item>
                <Form.Item
                    className="dark:text-white"
                    label="Email"
                    name="email"
                    style={{ color: "white" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}>
                    <Input type="email" placeholder="email" />
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
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <ToastContainer />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        className="bg-gray-700 dark:bg-slate-900 mt-4 rounded-lg"
                        htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default App;
