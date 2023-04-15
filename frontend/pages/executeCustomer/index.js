import React, { useState } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import ExecuteCustomerForm from "../../components/ExecuteCustomerForm";

const App = () => {
    return (
        <div className="dark:bg-gray-900 bg-white">
            <Head>
                <title>Execute Customer</title>
            </Head>
            <ExecuteCustomerForm></ExecuteCustomerForm>
        </div>
    );
};

export default App;
