import React from 'react'
import LoginForm from './LoginForm'


const Login = async () => {

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='p-6 flex flex-col items-center bg-white w-[25%] h-[58%] rounded-lg shadow-lg'>
            <h1 className='text-4xl font-medium'>Login</h1>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login