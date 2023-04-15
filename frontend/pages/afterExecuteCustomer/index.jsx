import React, { useState } from "react";
import { Button } from "antd";
// import Head from "next/head"

const Index = () => {
    const [manfName, setManfName] = useState("M Name");
    const [defectiveManf, setDefectiveManf] = useState(0);


    const [retailers, setRetailers] = useState([
        {
          name: "Retailer 1",
          IsDefective: 1,
        },
        {
          name: "Retailer 2",
          IsDefective: 0,
        },
      ]);
    // const [retailName, setRetailName] = useState("Retailer Name");
    // const [defectiveRetail, setDefectiveRetail] = useState(1);

    const [userName, setUserName] = useState("User Name");
    const [defectiveUser,setDefectiveUser] = useState(0);
    // const [defectiveAt,setDefectiveAt]=useState("None");  //1-manufacture 2- retailer 3-customer


    return (
        <div>
            
            <div className="min-h-screen bg-white-400 dark:bg-gray-900 py-6 p-4 md:p-0 flex flex-col justify-center sm:py-12">
            <div className="font-bold text-2xl text-center mb-12 ">Defective Product Timeline</div>
                <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                    
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* <!-- Vertical bar running through middle --> */}
                        <div className="hidden sm:block w-1  bg-gray-400 absolute h-3/4 left-1/2 transform -translate-x-1/2"></div>


{/* -----------------------------------------Manufacture section------------------------ */}



                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4  bg-white rounded drop-shadow-xl shadow">
                                            <span className="font-bold">
                                                Manufactured by :
                                            </span>
                                            <span className="font-sm">
                                                {" "}
                                                {manfName}
                                            </span>
                                            <br />
                                            <span className="font-sm">
                                                {" "}
                                                {/* {defectiveManf} */}
                                                {!defectiveManf ? <div>It is not defective</div> : <div>It is <span className="font-bold">defective</span></div>}
  
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`rounded-full border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ${defectiveManf ? 'bg-red-600' : 'bg-green-600'}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>



{/*------------------------------Retailer Section------------------------------  */}



                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            {retailers.map((retailer) => (
                            <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex justify-end w-full mx-auto items-center">
                                <div className="w-full sm:w-1/2 sm:pl-8">
                                <div className="p-4 bg-white drop-shadow-xl rounded shadow">
                                    <span className="font-bold">Retailer :</span>
                                    <span className="font-sm">{retailer.name}</span>
                                    <br />
                                    {!retailer.IsDefective ? <div>It is not defective</div> : <div>It is <span className="font-bold">defective</span></div>}
                                </div>
                                </div>
                            </div>
                            
                            <div className={`rounded-full border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ${retailer.IsDefective ? 'bg-red-600' : 'bg-green-600'}`}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                        ))};
                        </div>


{/* ----------------------------------Customer Section---------------------------------------------------- */}



                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 bg-white drop-shadow-xl rounded shadow">
                                            <span className="font-bold">
                                                User :
                                            </span>
                                            <span className="font-sm">
                                                {" "}
                                                {userName}
                                            </span>
                                            <br />
                                            <span className="font-sm">
                                                {" "}
                                                {/* {defectiveManf} */}
                                                {!defectiveManf ? <div>It is not defective</div> : <div>It is <span className="font-bold">defective</span></div>}
  
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`rounded-full border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center ${defectiveUser ? 'bg-red-600' : 'bg-green-600'}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-16 justify-center items-center">
                            <Button className="font-bold" type="primary" danger>
                                Return
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
