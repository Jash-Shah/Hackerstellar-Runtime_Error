import React, { useState } from "react";
import Head from "next/head";
import ExecuteRetailForm from "../../components/ExecuteRetailForm";

const App = () => {
    return (
        <>
            <Head>
                <title>Execute Retail</title>
            </Head>
            <ExecuteRetailForm></ExecuteRetailForm>
        </>
    );
};

export default App;
