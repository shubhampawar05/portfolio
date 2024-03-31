import React from 'react'
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Contactus = () => {
  return (
    <div className='w-full dark:bg-black dark:text-white transition-all duration-1000'>
        <section className='max-w-screen-xl mx-auto'>
            <div className='w-full h-screen py-12 flex '>
                <div className='w-1/3 flex flex-col justify-center'>
                    <h1 className=' text-5xl font-bold py-4'>Contact Me</h1>
                    <div className='flex items-center gap-2 p-2'><SiMinutemailer /> <p>Shubhamchopde090@gmail.com</p></div>
                    <div  className='flex items-center gap-2 p-2'><IoMdCall /> <p>7089971250</p></div>
                    <div className='flex text-3xl py-2 gap-3'><TiSocialTwitter /><SlSocialInstagram /><TiSocialFacebook /><TiSocialLinkedin /></div>
                    <div className='py-4 '><button className='px-8 py-2 bg-red-600 rounded-md text-white font-bold'>Download CV</button></div>
                </div>
                <div className='w-2/3  flex flex-col justify-center gap-4  px-12'>
                    <input type="text" placeholder='Your Name' className='rounded-xl shadow-md'/>
                    <input type="text" placeholder='Email'className='rounded-xl shadow-md' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='rounded-xl shadow-md'></textarea>
                    <div className='py-4 text-left'><button className='px-8 py-2 bg-red-600 rounded-md text-white font-bold'>Submit</button></div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contactus