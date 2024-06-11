"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Icon() {
    const [navModal, setNavModal] = useState(false)
    const [cartModal, setCartModal] = useState(false)


    return (
        <div className='flex items-center gap-3'>
            <div className='relative'>
                <Image onClick={() => setNavModal(prv => !prv)} className='cursor-pointer' src={"/profile.png"} width={25} height={25} alt='user' />
                {navModal && (
                    <div className=' absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2'>
                        <Link href={"profile"}>profile</Link>
                    </div>
                )}
            </div>
            <div className=''>
                <Image onClick={() => setCartModal(prv => !prv)} className='relative cursor-pointer' src={"/cart.png"} width={25} height={25} alt='user' />
                <div className='rounded-full h-6 w-6 flex items-center justify-center absolute top-1 bg-primery '>1</div>
                {cartModal && <>
                    <div className='flex flex-col gap-5 absolute w-max right-12 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white p-4'>
                        <h1>Cart Product</h1>
                        <div className='flex gap-8 items-center'>
                            <Image src={"/product_15.png"} className='rounded-md ' width={96} height={72} alt='cart_Item' />
                            <div>
                                {/* top */}
                                <div className='flex justify-between items-center gap-8'>
                                    <h1>Product Name</h1>
                                    <span>$ 49</span>
                                </div>
                                <div>
                                    <h3 className='text-gray-500'>available</h3>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <span className='text-gray-500'>Qty : 2</span>
                                    <button className='text-blue-500'>Remove</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <span>SubTotal</span>
                                <span>$49</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex justify-between'>
                            <button className='px-4 py-2 border rounded-md'>View Cart</button>
                            <button className='px-4 py-2 bg-black text-white rounded-md'>CheckOut</button>
                        </div>
                    </div>
                </>}
            </div>
            <Image className='cursor-pointer' src={"/notification.png"} width={25} height={25} alt='user' />
        </div>
    )
}

export default Icon