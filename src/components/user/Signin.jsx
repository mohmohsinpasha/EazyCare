import React from 'react'
import '../index.css'
function Signin() {
  return (
    <div className='flex h-lvh w-full items-center justify-center '>
      <div className='h-[30em] w-96 sm:w-[25em] md:w-[40em] lg:w-[28em] rounded-2xl border-black shadow-2xl shadow-gray-700 border-2 border-collapse border-solid bg-slate-100 flex justify-center items-center '>
        <div className='h-[25em] w-80   bg-slate-100 '>
          <h1 className='text-4xl'>Login</h1>
          <p className='my-4'>Please Login to book appointment</p>

          <label className='block'>Email</label>
          <input className='block h-[2em] w-full mt-[1em]' type="email" />
          <label className='block mt-3'>Password</label>
          <input className='block h-[2em] w-full mt-[1em]' type="password" />
          <button className='h-10 w-72 mt-[2em] rounded-md bg-blue-500  w-full text-white'>Login</button>
          <p className='mt-[2em]'>Already have an account? <a>Login here</a></p>
        </div>
      </div>

    </div>
  )
}

export default Signin