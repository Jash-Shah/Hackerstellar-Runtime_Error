import "../styles/globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useBreadCrumb } from "../hooks/BreadCrumb";
import Head from "next/head";
import Navbar from "components/Navbar.jsx";
import Footer from "components/Footer.jsx";
import LoadingScreen from "../components/loadingScreen";

// breadcrumbs
import Breadcrump from "components/utils/Breadcrump";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
    const [dark, setdark] = useState(false);
    const bread = useBreadCrumb();

    const [loading, setLoading] = useState(false);

    const ModeHandler = () => {
        const html = document.querySelector("html");
        if (dark == true) {
            html.classList.remove("dark");
        } else {
            html.classList.add("dark");
        }
        setdark(!dark);
    };

    useEffect(() => {
        AOS.init();
        setLoading(true);
        setInterval(() => setLoading(false), 4000);
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="Money, finance, manage, saving, scheduler, analysis"
                />
                <meta name="description" content="money manager website" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Navbar />
            {loading ? (
                <LoadingScreen />
            ) : (
                <main className="bg-slate-200 dark:bg-blue-400">
                    <div className="dark:bg-gray-800 bg-gray-300 px-4 py-2 text-black dark:text-white  border-l-4 border-blue-800 dark:border-white  breadnav flex flex-row">
                        <Breadcrump breadcrumbs={bread} />
                        <div
                            className="border-1 ml-auto mr-4"
                            onClick={ModeHandler}>
                            {dark ? (
                                <LightModeIcon fontSize="medium" />
                            ) : (
                                <DarkModeIcon fontSize="medium" />
                            )}
                        </div>
                    </div>
                    <Component {...pageProps} />
                </main>
            )}

            <Footer />
        </>
    );
}
