import React,{useState} from "react"
import { Button } from 'antd';
// import Head from "next/head"

const Index=()=>{
  const [manfName,setManfName]=useState("M Name");
  const [manfSend,setManfSend] = useState("9 am");
  const [retailName,setRetailName] = useState("Retailer Name");
  const [retailReceived,setRetailReceived] = useState("10am");
  const [retailSent,setRetailSent] = useState("11 am");
  const [userName,setUserName]=useState("User Name");
  const [userReceived,setUserReceived]=useState("2 pm");


    return(
        <div>
            <div className="min-h-screen bg-white dark:bg-gray-900 py-6 p-4 md:p-0 flex flex-col justify-center sm:py-12">
  <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div className="relative text-gray-700 antialiased text-sm font-semibold">

      {/* <!-- Vertical bar running through middle --> */}
      <div className="hidden sm:block w-1  bg-green-200 absolute h-3/4 left-1/2 transform -translate-x-1/2"></div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4  bg-white rounded drop-shadow-xl shadow">
                <span className="font-bold">Manufactured by :</span><span className="font-sm"> {manfName}</span>
                <br/>
                <span className="font-bold">Product Shipped at  :</span><span className="font-sm"> {manfSend}</span>
             
              </div>
            </div>
          </div>
          <div className="rounded-full bg-green-600  border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-end w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pl-8">
              <div className="p-4 bg-white drop-shadow-xl rounded shadow">
              <span className="font-bold">Retailer :</span><span className="font-sm"> {retailName}</span>
                <br/>
                <span className="font-bold">Product Received at :</span><span className="font-sm"> {retailReceived}</span>
                <br/>
                <span className="font-bold">Product shipped by :</span><span className="font-sm"> {retailSent}</span>
                <br/>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-green-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
      <div className="mt-6 sm:mt-0 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex justify-start w-full mx-auto items-center">
            <div className="w-full sm:w-1/2 sm:pr-8">
              <div className="p-4 bg-white drop-shadow-xl rounded shadow">
              <span className="font-bold">User :</span><span className="font-sm"> {userName}</span>
                <br/>
                <span className="font-bold">Product Received at :</span><span className="font-sm"> {userReceived}</span>
                <br/>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-green-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>



      <div className="flex mt-16 justify-center items-center">
  <Button className="font-bold" type="primary" danger>Return</Button>
</div>
   

       



    </div>

  </div>
</div>
        </div>
    )
}


export default Index;