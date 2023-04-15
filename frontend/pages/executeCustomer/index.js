import React, { useState } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import ExecuteCustomerForm from "../../components/ExecuteCustomerForm";

const App = () => {
    return (
        <>
            <Head>
                <title>Execute Customer</title>
            </Head>
            <ExecuteCustomerForm></ExecuteCustomerForm>
        </>
    );
};

export default App;
