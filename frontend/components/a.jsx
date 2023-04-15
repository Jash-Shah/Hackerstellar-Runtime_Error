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

             

                <div className="text-center pt-8">
                    <span className="font-bold text-lg">Add Images of the product below </span>
                    <br/>
                    <span className=" font-normal">(You can add multiple images, one at a time)</span>
                </div> 
            </Form>
            

        </>
    )
}

export default RegisterForm;