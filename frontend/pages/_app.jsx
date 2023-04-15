import "../styles/globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useBreadCrumb } from "../hooks/BreadCrumb";
import Head from "next/head";
import Navbar from "components/Navbar.jsx";
import Footer from "components/Footer.jsx";
import LoadingScreen from "../components/loadingScreen";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//flowbite
// import { FlowBite } from "flowbite";

export default function App({ Component, pageProps }) {
    const bread = useBreadCrumb();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AOS.init();
        setLoading(true);
        setInterval(() => setLoading(false), 3000);
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="keywords"
                    content="blockchain, supply chain, machine learning, ai, scheduler, analysis"
                />
                <meta name="description" content=" website" />
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
                    <Component {...pageProps} />
                </main>
            )}
            <Footer />
            {/* <Component {...pageProps} /> */}
        </>
    );
}
