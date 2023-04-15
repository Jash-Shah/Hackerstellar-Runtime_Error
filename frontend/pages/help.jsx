import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelpQueryForm from "../components/HelpQueryForm";

const App = () => {
    return (
        <>
            <HelpQueryForm />
        </>
    );
};

export default App;


{/* <Head>
                <title>Help</title>
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
                    label="Query"
                    name="query"
                    style={{ color: "white" }}
                    rules={[{ required: true, message: "Enter your query!" }]}>
                    <Input type="text" placeholder="Your query" />
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

                <ToastContainer />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        className="bg-gray-700 dark:bg-slate-900 mt-4 rounded-lg"
                        htmlType="submit">
                        Submit query
                    </Button>
                </Form.Item>
            </Form> */}