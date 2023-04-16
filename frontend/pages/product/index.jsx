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
