import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Login() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState(false);
  const isEmpty = touched && fullName === '';
  const less = (touched && password.length < 6);
  const notEqual = password !== confirmPassword;

  const togglePasswordVisibility = () => {
    setShowPassword((prevPassword) => !prevPassword);
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-800 to-green-500'>
      <div className="bg-white lg:w-1/2 rounded-lg p-8">
        <div className='flex justify-center'>
          <div>
            <img src="/src/assets/logo.jpeg" alt="Logo" className="sm:w-25 md:w-30 w-15 md:h-25 h-10" />
          </div>
          <div className='sm:text-5xl lg:mt-2'>
            <h1 className='font-bold'>CHISEC <span className='text-gray-500'>ACADEMY</span></h1>
          </div>
        </div>

        <div className='flex justify-center gap-8 md:text-2xl mb-4'>
          
          <Link to="/home" className='hover:border-b'>Login</Link>
        </div>

        <form className='flex flex-col justify-center items-center'>
          <input type='text' placeholder='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onBlur={() => setTouched(true)} // mark as touched
           className={`w-9/10 border px-4 py-2 rounded-lg mb-4 ${isEmpty ? "border-red-500": "border"}`} />
           {isEmpty ? <p className='border-red-500 text-red-500'>Enter your full name</p> : null}
         
          <div className='w-9/10 relative mb-4'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border px-4 py-2 rounded-lg pr-12'
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            

          </div>

          

          <Link to="/home" type='submit' className='w-9/10 border rounded-lg 
          text-center px-4 py-2 text-2xl bg-linear-to-r from-blue-800 to-green-500 mb-6'>
            Login
          </Link>

          
         
        </form>
        
      </div>
    </div>
  )
}

export default Login