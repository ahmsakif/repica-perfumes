"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function AuthButton() {

    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // check login status
    useEffect(() => {
        const checkLogin = () => {
            const loggedIn = document.cookie.includes("auth");
            setIsLoggedIn(loggedIn)
        }
        checkLogin()
    }, [])

    const handleLogout = () => {
        document.cookie = "auth=; path=/; max-age=0"

        setIsLoggedIn(false)

        router.push('/')
       window.location.href = "/"
    }

    if (isLoggedIn) {
        return (
            <div>
                <button
                    onClick={handleLogout}
                    className='text-red-600 font-bold border px-6 py-2 rounded-3xl hover:bg-red-600 hover:text-white transition-all duration-300'
                >
                    Logout
                </button>
            </div>
        )
    }

    return (
        <Link href="/login" className='px-6 py-2 bg-black text-white font-semibold rounded-3xl mx-3 hover:bg-amber-800 transition-all duration-300'>
            Login
        </Link>
    )

}
