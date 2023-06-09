import Head from "next/head";
import PersonIcon from "@mui/icons-material/Person";
import FactoryIcon from "@mui/icons-material/Factory";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "components/LoginForm";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { purple } from "@mui/material/colors";

import { Inter } from "next/font/google";
import InputWithDropdown from "../components/InputWithDropdown";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    const [log, setlog] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("username")) {
            setlog(true);
        } else {
            setlog(false);
        }
    }, [log]);

    return (
        <>
            <Head>
                <title>VeriTrack</title>
            </Head>
            <ToastContainer />
            <section className="h-50 bg-white dark:bg-gray-900">
                <div className="gap-8 columns-2 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            VeriTrack
                        </h1>
                        <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Your one stop destination for comprehensive and
                            reliable supply chain management
                        </h4>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            Track every step of your supply chain with
                            VeriTrack. Ensure transparency, traceability, and
                            trust in your supply chain processes. Streamline
                            logistics, reduce fraud, and optimize your
                            operations with ease.
                        </p>
                        <a
                            href="#retailSection"
                            className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900">
                            Get started
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="white"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    {log ? <></> : <LoginForm></LoginForm>}
                </div>
            </section>

            <section className="p-10 bg-purple-800 dark:bg-blue-900">
                <h1 className="text-white text-4xl font-bold text-center p-4 mb-4">
                    Our Services
                </h1>
                <div className="columns-3 ">
                    <div className="m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <PersonIcon color="action" className="dark:text-white" fontSize="large" />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Customer
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Reliably track your ordered products from the shop
                            to your doorstep.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:underline">
                            Learn more
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <FactoryIcon fontSize="large" className="dark:text-white" />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Manufacturer
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Track your products from the raw materials to the
                            finished product.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:underline">
                            Learn more
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="m-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <StorefrontIcon fontSize="large" className="dark:text-white" />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                Retailer
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Make sure that your products are delivered to the
                            right place at the right time.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-blue-600 hover:underline">
                            Learn more
                            <svg
                                className="w-5 h-5 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="retailSection" className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Join as a Manufacturer
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            Join VeriTrack and revolutionize your manufacturing
                            process. Easily create and manage digital records of
                            your products, suppliers, and shipments. Gain
                            real-time visibility into your supply chain and
                            build trust with your customers.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900">
                            Learn more about starting as a Manufacturer
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <img
                        className="w-full dark:hidden"
                        src="/images/business.svg"
                        alt="dashboard image"
                    />
                    <img
                        className="w-full hidden dark:block"
                        src="/images/delivery.svg"
                        alt="dashboard image"
                    />
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img
                        className="w-full dark:hidden"
                        src="/images/delivery.svg"
                        alt="dashboard image"
                    />
                    <img
                        className="w-full hidden dark:block"
                        src="/images/delivery.svg"
                        alt="dashboard image"
                    />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Join as a Retailer
                        </h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                            Welcome to VeriTrack, and effortlessly track and
                            verify the authenticity of your products, enhance
                            customer confidence, and ensure compliance with
                            ease. Join now to optimize your retail operations
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900">
                            Learn more about starting as a Retailer
                            <svg
                                className="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
