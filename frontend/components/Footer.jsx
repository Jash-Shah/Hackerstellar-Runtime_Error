
// 'use client';


import { socials } from './utils/constant';
import styles from '../styles';
import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const handleClick(){

// }
const Footer = () => (
  
  <div className='bg-black'>
<div className="footer-gradient " />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-4`}>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10" />

        <div className="flex items-center px-24 justify-between flex-wrap gap-4 mb-16">

    
           <Link href="/">
            <h1 className="navbarFont ml-1 text-2xl  font-bold" style={{ color: 'white', fontFamily: 'sans-serif' }}>
                Veri<span style={{ color: '#a142f5', fontFamily: 'sans-serif' }}>Track</span>
              </h1>
      
          </Link> 

          <span className="font-normal text-[14px] text-white opacity-60">
            <span className="font-bold">©VeriTrack .</span> All rights reserved.
            <br />
            <span className="underline underline-offset-4">Terms of Service</span> and <span className="underline-offset-4 underline">Privacy Policy</span>
          </span>
          <br />
      
          <div className="flex gap-3 ">
            {socials.map((social) => (
              <a target="__blank" key={social.key} href={social.socialurl}>
                <img
                  src={social.imgurl}
                  alt={social.name}
                  className="w-[24px] h-[30px] object-contain cursor-pointer hover:w-12"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
    
);

export default Footer;

