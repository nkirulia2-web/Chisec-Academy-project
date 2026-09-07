import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'
import { FaFacebookSquare } from 'react-icons/fa'

function ContactUs() {
  return (
    <div>
    <div className='bg-linear-to-br from-blue-800 to-green-500 h-60 flex justify-center items-center'>
        <h1 className='text-5xl text-white font-bold'>Get in Touch</h1>
         </div>
        
        <div className='grid grid-cols-2 mt-8 ml-8'>
            <div>
                <h2 className='text-2xl font-bold text-blue-800'>Contact Us</h2>
                <form className='ml-4'>
                    <div><input type='text' placeholder='Name' className='mt-2 border border-gray-400 w-5/10'>
                    </input>
                    </div>
                    <div>
                     <input type='Email' placeholder='Email' className='mt-2 border border-gray-400 w-5/10'>
                    </input>
                    </div>
                    <div>
                        <textarea placeholder='message' className='mt-2 border border-gray-400 w-5/10'></textarea>
                    </div>
                    <button className='bg-blue-600 w-5/10 py-1 rounded-lg mt-4'>Send Message</button>
                </form>
            </div>
            <div className=''>
                <h2 className='text-2xl text-blue-800 font-bold'>Contact Information</h2>
                <p>📧 Email: Support@chisecacademy.com</p>
                <p>📞 +234</p>
                <div className=''>
                    <p>Follow Us</p>
                    <div className='flex gap-4'>
                    <FaFacebookSquare className='bg-blue-500'/>
                    <BsTwitter className='bg-blue-950'/>
                    <BsLinkedin className='bg-blue-700'/>
                    <CiYoutube className='bg-red-800'/>
                    </div>
                </div>
            </div>
        </div>

   
    </div>
  )
}

export default ContactUs