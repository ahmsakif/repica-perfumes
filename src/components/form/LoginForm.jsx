"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


export default function LoginForm() {

    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email === "admin@example.com" && password === '123456') {
            document.cookie = "auth=true; path=/"
            router.push("/perfumes")
        } else {
             
        }
        console.log(email, password);
    }
    return <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Email address</label>
            <input type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='your@example.com'
                className='mt-1 border rounded-sm px-4 py-2 text-sm w-full text-black border-gray-300 '
            />
        </div>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='************'
                className='mt-1 border rounded-sm px-4 py-2 text-sm w-full text-black border-gray-300 '
            />
        </div>
        <div>
            <button className='btn w-full bg-black px-4 py-2 rounded-sm font-semibold text-sm text-white '>Sign in</button>
        </div>
    </form>
}
