import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ethers } from "ethers";
import {
    CONTRACT_ABI,
    CONTRACT_ADDRESS,
} from "../../BlockInteraction/config.js";

function Execute() {
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

    useEffect(() => {
        const writeContract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            // connection using the object created by metamask, metamask behind the scenes uses infura
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                CONTRACT_ADDRESS,
                CONTRACT_ABI,
                signer,
            );
            contract.setValue(2);

            // await contract.sendEthContract({
            //     value: ethers.utils.parseEther("0.01"),
            // });

            await contract.sendEthUser(
                `0xf28b8B0227332B87798B4fA68cba2ceaA37FFF19`,
                {
                    value: ethers.utils.parseEther("0.001"),
                },
            );
        };
        writeContract();
    });

    return (
        <>
            <Head>
                <title>Execute</title>
            </Head>
            <Form
                className="m-auto my-10 py-4 p-4 pt-8 rounded-xl dark:bg-blue-400 bg-red-300"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 400 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off">
                <Form.Item
                    className="dark:text-white"
                    label="address"
                    name="name"
                    style={{ color: "white" }}
                    rules={[{ required: true, message: "Customer address!" }]}>
                    <Input type="text" placeholder="customer address" />
                </Form.Item>
                <Form.Item
                    className="dark:text-white"
                    label="Price"
                    name="price"
                    style={{ color: "white" }}
                    rules={[
                        {
                            required: true,
                            message: "Enter unique username!",
                        },
                    ]}>
                    <Input type="text" placeholder="price" />
                </Form.Item>
                <Form.Item
                    className="dark:text-white"
                    label="Email"
                    name="email"
                    style={{ color: "white" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input your product name!",
                        },
                    ]}>
                    <Input type="email" placeholder="product name" />
                </Form.Item>
                <ToastContainer />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button
                        type="primary"
                        className="bg-gray-700 dark:bg-slate-900 mt-4 rounded-lg"
                        htmlType="submit">
                        Start shipment
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Execute;
