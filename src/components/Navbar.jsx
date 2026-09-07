import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const navItems = [
        { path: '/', name: 'Home'},
        {path:  '/courses', name: 'Courses'},
        { path: '/about', name: 'About'},
        {path: '/contact', name: 'Contact'},

    ];
  return (
    <div className='flex justify-center border border-gray-300 bg-linear-to-r from-white to-green-500'>
        <div className='flex  gap-2 w-9/10 justify-between mt-5'>
            <div className='flex ml-7'>
                <div className='bg-blue-800 inline-flex rounded-lg'>
        <img  src="/src/assets/logo1.png" alt="logo"className='w-16 '/>
        </div>
        <p className='mt-3 text-2xl'><span className='font-bold text-blue-500'>Chisec</span>  Academy</p>
        </div>
        <nav className='flex flex-col justify-around '>
            <div className='flex gap-5 '>
            {navItems.map((item, index) => (
           <Link to={item.path} key={index} className='hover:border-b text-blue-950'>{item.name}</Link>     
            ))}
            <Link to="/signUp" className='ml-6 rounded-lg bg-amber-50 text-blue-950 py-2 px-5'>Sign Up</Link>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar;