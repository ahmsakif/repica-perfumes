"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function DashboardButton() {
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // check login status
    useEffect(() => {
        const checkLogin = () => {
            const loggedIn = document.cookie.includes("auth");
            setIsLoggedIn(loggedIn)
        }
        checkLogin()
    }, [pathname])

    if (isLoggedIn) {
        return (
                <Link href="admin/add"
                    className='text-gray-600 hover:text-gray-900 px-3 pt-2 pb-1 text-sm font-medium transition-colors border-b-2 border-gray-600 hover:border-gray-900'
                >
                    Add Item
                </Link> 
        )
    }

    return
}
