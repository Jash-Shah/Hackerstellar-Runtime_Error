import React, { useState } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import ExecuteManfForm from "../../components/ExecuteManfForm";

const App = () => {
    return (
        <>
            <Head>
                <title>Execute</title>
            </Head>
            <ExecuteManfForm></ExecuteManfForm>
        </>
    );
};

export default App;
