import React, { useState } from "react";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputWithDropdown from "./InputWithDropdown";
import OrderedList from "./OrderedList";

function ExecuteManf() {
    const router = useRouter();
    console.log(router.route);
    const d = new Date();
    const [form] = Form.useForm();

    const [searchValue, setSearchValue] = useState('');
    const [suggestedOptions, setSuggestedOptions] = useState([]);
    // add a retailers state to hold the array of retailers
    const [retailers, setRetailers] = useState([]);
    const [retailFormValue, setRetailFormValue] = useState("");

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue);
        setRetailFormValue(inputValue);
        // Filter options based on input value
        const filteredOptions = sampleArray.filter((option) =>
            option.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        setSuggestedOptions(filteredOptions);
    };

    const handleOptionSelect = (selectedValue) => {
        setSearchValue(selectedValue);
        setRetailFormValue(selectedValue);
        setSuggestedOptions([]);
    };

    // add a function to handle adding a retailer to the array
    const handleAddRetailer = () => {
        const retailer_name = retailFormValue;
        // const inputValue = inputRef.current.state.value;
        if (typeof retailer_name == 'undefined' || retailer_name == '') {
            console.log("Getting undefined")
        } else {
            setRetailers([...retailers, retailer_name]);
        }
        form.resetFields(["retailer"]);
    };

    // for input of images
    const normFile = e => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const onFinish = async values => {
        const d = new Date();
        const joinedAt = d.toISOString();
        console.log(retailers);
        const data = { ...values, joinedAt, orders: [{}], retailers };
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
    // This is what you have to change
    // Used the name sampleArray at various places, so you can change those 
    // places or add the value to this array
    const sampleArray = [
        { value: '1', label: 'Retailer 1' },
        { value: '2', label: 'Retailer 2' },
        { value: '3', label: 'Retailer 3' }
    ];

    const items = ['Item 1', 'Item 2', 'Item 3'];
    return (
        <>
            <Form
                className="m-auto w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                form={form}
                autoComplete="off">
                <div className="flex">
                    <h5 className="m-auto mb-4 text-xl font-medium text-gray-900 dark:text-white underline-offset-4 underline">
                        Execute for Manufacturer
                    </h5>
                </div>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="customer"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}>
                    <Input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" placeholder="Customer Address" />
                </Form.Item>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the price!",
                        },
                    ]}>
                    <Input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" placeholder="10000 INR" />
                </Form.Item>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="product_name"
                    rules={[
                        {
                            required: true,
                            message: "Enter the product name!",
                        },
                    ]}>
                    <Input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" placeholder="Product Name"
                    />
                </Form.Item>
                <Form.Item
                    className="relative z-0 w-full mb-6 group"
                    name="product_description"
                    rules={[
                        {
                            required: true,
                            message: "Enter the product description!",
                        },
                    ]}>
                    <Input
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" placeholder="Product Description"
                    />
                </Form.Item>

                {/* <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div> */}

                <div className="text-center pt-8">
                    <span className="font-bold text-lg">Add Images of the product below </span>
                    <br />
                    <span className=" font-normal">(You can add multiple images, one at a time)</span>
                </div>

                <Form.Item
                    className="my-6"
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >

                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>
                            Click to upload
                        </Button>
                    </Upload>
                </Form.Item>

                <div className="text-center pt-8">
                    <span className="font-bold text-lg">
                        Add names of Retailers below{" "}
                    </span>
                    <br />
                    <span className=" font-normal">
                        (Select add user to add multiple retailers)
                    </span>
                    <span className="font-bold text-lg">Add names of Retailers below </span>
                    <br />
                    <span className="font-normal">(Select add user to add multiple retailers)</span>
                </div>




                {/* Retailer data--------------------------------------------
----------------------------------------------------------- */}
                {/* Add retailer input */}
                <div className="">
                    <Form.Item
                        className=""
                        label="Retailer"
                        name="retailer"
                        rules={[{ required: true, message: 'Please input retailer name' }]}
                    >
                        <Input
                            type="text"
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        {sampleArray.length > 0 && (
                            <ul className="absolute z-10 left-0 right-0 mt-2 p-2 bg-white border border-gray-300 rounded-md">
                                {sampleArray.map((option, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleOptionSelect(option.label)}
                                    >
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Form.Item>
                    {/* Button to add retailer */}
                    <Button className="inline-flex bg-blue-700" type="primary" onClick={handleAddRetailer}>Add retailer</Button>
                </div>
                <OrderedList items={items}></OrderedList>
                <ToastContainer />

                <Form.Item>
                    <Button
                        type="primary"
                        className="text-white mt-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 p-2.5 pb-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        htmlType="submit">
                        Execute Product
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default ExecuteManf;
