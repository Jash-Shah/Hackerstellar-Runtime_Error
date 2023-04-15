import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Sidemenu from "./utils/Sidemenu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";



function Navbar() {
    const [isopen, setisopen] = useState(false);
    const [log, setlog] = useState(false);
    const [dark, setdark] = useState(false);


    const logoutHandler = () => {
        localStorage.removeItem("token");
        setlog(false);
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setlog(true);
        } else {
            setlog(false);
        }
    }, [log]);

    const menuOpener = () => {
        console.log(isopen);
        setisopen(prevState => !prevState);
    };

    const ModeHandler = () => {
        const html = document.querySelector("html");
        if (dark == true) {
            html.classList.remove("dark");
        } else {
            html.classList.add("dark");
        }
        setdark(!dark);
    };

    return (
        <>
            <nav className="bg-slate-100 shadow-lg px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container  flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex">
                        <img
                            src="favicon.ico"
                            height={20}
                            className="h-6 mr-3 sm:h-9"
                            alt="VeriTrack Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Veri<span style={{color:"#a142f5"}}>Track</span>
                        </span>
                    </div>
                    <div className="flex md:order-2">
                        <div
                            className="m-auto pr-4"
                            onClick={ModeHandler}>
                            {dark ? (
                                <LightModeIcon className="text-yellow-400" fontSize="medium" />
                            ) : (
                                <DarkModeIcon fontSize="medium" />
                            )}
                        </div>
                        {log ? (
                            <button
                                type="button"
                                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                onClick={logoutHandler}>
                                Logout
                            </button>
                        ) : (
                            <Link href="/register">
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Register
                                </button>
                            </Link>
                        )}

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={menuOpener}>
                            <Hamburger toggled={isopen} size={20} />
                        </button>


                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/profile"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/track"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Track
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/execute"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Execute
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/help"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page">
                                    Help
                                </Link>
                            </li>
                            {/* {!log && (
                                <li>
                                    <Link
                                        href="/login"
                                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                        aria-current="page">
                                        Login
                                    </Link>
                                </li>
                            )} */}
                        </ul>
                    </div>
                </div>
            </nav>
            {isopen ? <Sidemenu log={log} /> : <></>}
        </>
    );
}

export default Navbar;
