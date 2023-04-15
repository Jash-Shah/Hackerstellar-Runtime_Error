import Head from "next/head";
import styles from "styles/Home.module.css";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import FactoryIcon from "@mui/icons-material/Factory";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Chainner</title>
            </Head>
            <ToastContainer />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1 className="animate-bounce">Welcome to Chainner!!!</h1>
                    <p className="w-96 px-8 pr-4 pb-4 text-center -mt-4">
                        Are you looking to know your daily life financial
                        routine? aren&apos;t you curious to analyse how much you
                        spent on average each day? Would you like to manage your
                        finance to utilize your money in the best way? If yes,
                        you are at the right place!!!
                    </p>
                </div>
                <div className="flex flex-col justif-evenly items-center gap-2 bg-blue-400/50 rounded-xl p-4 dark:bg-gray-400/70">
                    <Image
                        src="/images/illustrate.jpg"
                        width={200}
                        height={200}
                        alt="money"
                        style={{ borderRadius: "50%" }}
                        className=""
                    />
                    <Image
                        src="/images/security.svg"
                        width={150}
                        height={200}
                        alt="money"
                    />
                </div>
            </div>
            <section className="p-10 mt-20 bg-purple-800 dark:bg-blue-900">
                <h2 className="text-red-200 text-3xl text-bold text-center p-4 mb-4">
                    Our Services
                </h2>
                <div className={styles.cards}>
                    <div
                        className="bg-red-300 dark:bg-slate-300 flex flex-col justify-evenly w-72 items-center p-4"
                        data-aos="slide-right">
                        <h3>Customer</h3>
                        <p>
                            customers can track the product ordered by them,
                            verify their product quality
                        </p>
                        <PersonIcon fontSize="large" />
                    </div>
                    <div
                        className="bg-red-300 dark:bg-slate-300 flex flex-col justify-evenly w-72 items-center p-4"
                        data-aos="slide-right">
                        <h3>Manufacturer</h3>
                        <p>
                            Manufacturer can create a supply chain and track the
                            product sold by them. rating helps customer build
                            trust.
                        </p>
                        <FactoryIcon />
                    </div>
                    <div
                        className="bg-red-300 dark:bg-slate-300 flex flex-col justify-evenly w-72 items-center p-4"
                        data-aos="slide-right">
                        <h3>Retailer</h3>
                        <p>
                            Retailer can sign the product and send it to the
                            next retailer/customer in chain.
                        </p>
                        <StorefrontIcon />
                    </div>
                </div>
            </section>
            <section className={styles.manu}>
                <h2 className="text-right max-w-fit bg-slate-400 text-black dark:bg-black dark:text-white p-4 w-max-fit text-3xl rounded-lg my-5">
                    Join Us As Manufacturer
                </h2>
                <div className="flex flex-row flex-wrap justify-evenly items-center">
                    <div className="py-5">
                        <Image
                            src="/images/plan.svg"
                            width={300}
                            height={300}
                            alt="money"
                        />
                    </div>
                    <div>
                        <p>
                            Would you like to gain some trust of customers?
                            create a chain for the product you are selling and
                            build a brand.
                        </p>
                        <Link href="/retail/register">
                            <button>Get started as Manufacturer</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className={styles.retail}>
                <h2 className="text-right max-w-fit bg-slate-400 text-black dark:bg-black dark:text-white p-4 w-max-fit text-3xl rounded-lg my-5">
                    Join us as Retailer
                </h2>
                <div className="flex flex-wrap justify-evenly items-center py-5">
                    <Image
                        src="/images/delivery.svg"
                        width={300}
                        height={300}
                        alt="money"
                    />
                    <div>
                        <p>
                            Authenticate the product you have got with our
                            website and send it ahead in the chain. it requires
                            less time and provides more security!!!
                        </p>
                        <Link href="/manufact/register">
                            <button>Get started as Retailer</button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
