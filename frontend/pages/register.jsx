import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Radio } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "../components/RegisterForm";

const App = () => {
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="flex justify-center w-full h-screen dark:bg-slate-800">
                <div className="mt-32 w-8/12">
                    <RegisterForm></RegisterForm>
                </div>
            </div>
        </>
    );
};

export default App;
