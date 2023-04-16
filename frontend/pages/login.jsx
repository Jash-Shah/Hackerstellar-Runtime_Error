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
            <div className="flex justify-center h-screen dark:bg-slate-700">
                <div className="mt-64">
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default App;
