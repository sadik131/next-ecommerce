"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function SarchBar() {
    const [query, setQuery] = useState("")
    const router = useRouter()
    const QuerrySarch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query) {
            router.push(`/pages/list?name=${query}`)
        }
    }
    return (
        <form onSubmit={QuerrySarch} className='bg-slate-200 flex flex-1 gap-2 p-2 rounded-md '>
            <input onChange={(e) => setQuery(e.target.value)} className='bg-transparent flex-1 outline-none' type="text" placeholder='Search' />
            <button type='submit'>
                <Image src={"/search.png"} height={15} width={20} alt='search' />
            </button>
        </form>
    )
}

export default SarchBar