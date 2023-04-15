import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../components/LoginForm"; 

const App = () => {
    return (
        <>
            {/* Add Code to center according to the page */}
            <LoginForm />
        </>
    );
};

export default App;

