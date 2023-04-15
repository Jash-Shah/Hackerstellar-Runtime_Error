import React, { useState } from "react";
import Head from "next/head";

export default function Timeline() {
    const [items, setitems] = useState([
        { info: "User Info", state: true },
        { info: "Product Info", state: true },
        { info: "Retailer Info", state: false },
        { info: "Manufacturer Info", state: false },
    ]);
    return (
        <>
            <Head>Track</Head>
            <div className="bg-slate-400 w-96 m-auto p-4">
                <ol class="flex items-center w-full">
                    {items.map(ele => {
                        return ele.state ? (
                            <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                                <span>
                                    <h3 class="font-medium leading-tight">
                                        {ele.info}
                                    </h3>
                                </span>
                            </li>
                        ) : (
                            <li class="flex w-full items-center  text-gray-200 after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                                <span>
                                    <h3 class="font-medium leading-tight">
                                        {ele.info}
                                    </h3>
                                </span>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
}
