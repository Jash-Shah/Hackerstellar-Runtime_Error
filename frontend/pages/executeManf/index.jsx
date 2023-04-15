import React, { useEffect, useState } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import ExecuteManfForm from "../../components/ExecuteManfForm";
import connectWallet from "../../connectWallet";

const App = () => {
    const handler = async () => {
        const wallet = await connectWallet();
        console.log(wallet);
    };

    useEffect(() => {
        handler();
    }, []);

    return (
        <>
            <Head>
                <title>Execute Manufacture</title>
            </Head>
            <ExecuteManfForm></ExecuteManfForm>
        </>
    );
};

export default App;
