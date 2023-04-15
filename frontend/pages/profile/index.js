import React, { useState } from 'react'
import { Button } from 'antd';

const Index=()=> {
  const [userName,setUserName]=useState("YourName");
  const [userEmail,setUserEmail]=useState("YourEmail");
  const [userAddress,setUserAddress]=useState("YourWalletAddress");
  const [userType,setUserType]=useState("YourType");
  const [newAddress, setNewAddress] = useState('');
  const [newEmail, setNewEmail] = useState('');


  // ------------------ for updating wallet address
  const [showInput,setShowInput] = useState(true);
  const handleUpdateClick = () => {
    setUserAddress(newAddress);
    setNewAddress('');
  };

  const handleInputChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleVisibility=()=>{
    setShowInput(!showInput);
  };

  // -------------------for updating email
  const [showInputEmail,setShowInputEmail] = useState(true);
  const handleUpdateClickEmail = () => {
    setUserEmail(newEmail);
    setNewEmail('');
  };

  const handleInputChangeEmail = (event) => {
    setNewEmail(event.target.value);
  };

  const handleVisibilityEmail=()=>{
    setShowInputEmail(!showInput);
  };


  return (
<div>
    
  <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
    {/* <!--Main Col--> */}
    <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
    
  
      <div class="p-4 md:p-12 text-center lg:text-left">
        {/* <!-- Image for mobile view--> */}
        <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
        <img src="/profile/user.jpg" className="rounded-3xl lg:rounded-lg shadow-2xl lg:block" />
        </div>
        
        <h1 class="text-2xl  pt-8 lg:pt-0">Hello,</h1>
        <h1 class="text-3xl font-bold animate-bounce lg:pt-0">{userName}</h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>


      {/* fields of user */}
        <div className="flex flex-col items-center lg:items-start  ">
          {/* Item 1 */}
          <div>
            <div className='flex'>
              <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>{userAddress}</p>
              <Button className={`ml-2 mt-4 ${showInput ? 'visible' : 'invisible'}`} onClick={handleVisibility}>Click me!</Button>
            </div>
            
            <div  className={`flex items-center ${showInput ? 'invisible' : 'visible'}`}>
              <input type="text" value={newAddress} onChange={handleInputChange} className="border rounded-l-lg p-2 w-full" />
              <Button  className="ml-2 font-bold " onClick={handleUpdateClick}>Update</Button>
            </div>
          </div>

          {/* Item 2 */}
      
          
          <div>
            <div className='flex'>
            <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg  class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>{userEmail}</p>
              <Button className={`ml-2 mt-4 ${showInputEmail ? 'visible' : 'invisible'}`} onClick={handleVisibilityEmail}>Click me!</Button>
            </div>
            
            <div  className={`flex items-center ${showInputEmail ? 'invisible' : 'visible'}`}>
              <input type="text" value={newEmail} onChange={handleInputChangeEmail} className="border rounded-l-lg p-2 w-full" />
              <Button  className="ml-2 font-bold " onClick={handleUpdateClickEmail}>Update</Button>
            </div>
          </div>

          {/* item 3 */}
          <div>
            <div className='flex'>
            <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg  class=" text-green-700 mr-4 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="profile"><path fill="#000" fill-rule="evenodd" d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218" transform="translate(-124 -1999)"></path></svg>{userType}</p>
              <Button className={`ml-2 mt-4 invisible`} onClick={handleVisibilityEmail}>Click me!</Button>
            </div>
            
            <div  className={`flex items-center invisible`}>
              <input type="text" className="border rounded-l-lg px-2 " />
              <Button >Update</Button>
            </div>
          </div>
          
        </div>



        {/* <div class="flex justify-center items-center"> */}
  {/* <div class="flex flex-col items-center">
  <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg>{userAddress}</p>
        <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg  class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>{userEmail}</p>
        <p class="pt-4 text-base font-bold flex items-center  lg:justify-start"><svg  class=" text-green-700 mr-4 " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" id="profile"><path fill="#000" fill-rule="evenodd" d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218" transform="translate(-124 -1999)"></path></svg>{userType}</p>
  </div> */}
{/* </div> */}

        
        <div class="pt-12 pb-8">
          <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            Log out
          </button> 
        </div>
  
        <div class="mt-6 px-40 pb-16 lg:pb-0 mx-auto flex flex-wrap items-center justify-between">
          <a class="link" href="#" data-tippy-content="@facebook_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
          <a class="link" href="#" data-tippy-content="@twitter_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
          <a class="link" href="#" data-tippy-content="@github_handle"><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
        </div>
        
        
  
      </div>
  
    </div>
    
    {/* <!--Img Col--> */}
    <div className="w-full lg:w-2/5">
      {/* <!-- Big profile image for side bar (desktop) --> */}
      <img src="/profile/user.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
      {/* <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A --> */}
      
    </div>
    
  
  </div>
</div>
  )
}

export default Index