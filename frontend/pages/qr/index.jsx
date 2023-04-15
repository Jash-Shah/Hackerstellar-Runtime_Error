import React, { useState } from "react";
import QR from "../../components/QrCode";
import Head from "next/head";

const App = () => {
    return (
        <>
            <Head>
                <title>QR code</title>
            </Head>
            <QR></QR>
        </>
    );
};

export default App;
