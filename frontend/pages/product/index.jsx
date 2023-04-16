import React, { useState } from "react";
import Head from "next/head";
import Product from "../../components/Product";

const App = () => {
    const product ={
        productId: "123",
        manufacturer: "ABC",
        customer: "XYZ",
        price: "100",
        productName: "Product 1",
        productDescription: "Product 1 Description",
        productImages: ["https://images.unsplash.com/photo-1616489953148-8b8f5b0b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"],
        dateManufactured: "2021-03-25",
        dateReceived: "2021-03-25",
        reachedClient: true
    }
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <Product {...product}></Product>
        </>
    );
};

export default App;
