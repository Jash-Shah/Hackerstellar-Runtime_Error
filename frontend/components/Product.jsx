import React from "react";

const Product = (props) => {
    return (
        <div className="flex justify-center items-center h-screen dark:bg-slate-700">
            <div className="w-8/12 mb-32">
                <table className="border-collapse w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 px-4 py-2">Field</th>
                            <th className="border border-gray-400 px-4 py-2">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Product ID</td>
                            <td className="border border-gray-400 px-4 py-2">{props.productId}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Manufacturer</td>
                            <td className="border border-gray-400 px-4 py-2">{props.manufacturer}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Customer</td>
                            <td className="border border-gray-400 px-4 py-2">{props.customer}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Price</td>
                            <td className="border border-gray-400 px-4 py-2">{props.price}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Product Name</td>
                            <td className="border border-gray-400 px-4 py-2">{props.productName}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Product Description</td>
                            <td className="border border-gray-400 px-4 py-2">{props.productDescription}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Date Manufactured</td>
                            <td className="border border-gray-400 px-4 py-2">{props.dateManufactured}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Date Received</td>
                            <td className="border border-gray-400 px-4 py-2">{props.dateReceived}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-400 px-4 py-2 font-medium">Reached Client</td>
                            <td className="border border-gray-400 px-4 py-2">{props.reachedClient.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;
