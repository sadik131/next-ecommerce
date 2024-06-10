"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Menu() {

    const [openMenu, setOpenMenu] = useState(true)


    return (
        <div>
            <Image  src={"/menu.png"} width={25} height={25} alt="menu"  onClick={()=>setOpenMenu(prv=>!prv)}/>
            {openMenu && <div className="absolute top-20 bg-black justify-center gap-5 flex flex-col items-center h-custom left-0 w-full text-white ">
                <Link href={""}>Homepage</Link>
                <Link href={""}>Shop</Link>
                <Link href={""}>Deals</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
                <Link href={""}>Logout</Link>
                <Link href={""}>Cart(1)</Link>
            </div>}
        </div>
    )
}

export default Menu