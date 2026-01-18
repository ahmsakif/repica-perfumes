import LoginForm from '@/components/form/LoginForm'
import React from 'react'

export default function login() {
  return (
    <div className='bg-white flex w-full min-h-screen items-center justify-center'>
      <div className='max-w-sm px-8 py-10 w-full bg-white rounded-lg border shadow-xl border-gray-100'>
        <h2 className='font-bold text-lg text-center'>Welcome Back</h2>
        <LoginForm />
      </div>

    </div>
  )
}
