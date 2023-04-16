import React from "react";
import Head from "next/head";
import LoginForm from "../components/LoginForm";

const App = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            {/* Add Code to center according to the page */}
            <LoginForm />
        </>
    );
};

export default App;
