import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductList() {
    return (
        <div>
            <div className='w-full flex flex-wrap gap-x-10 gap-y-14'>
                <Link href={"/pages/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80 bg-gray-200'>
                        <Image className='absolute z-10 hover:opacity-0 transition-opacity ease duration-100' src={"/product1.jpg"} fill alt='product' />
                        <Image className='absolute' src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <div>
                        <div className='flex my-2 justify-between'>
                            <h1 className='text-xl font-bold'>Digital Incense</h1>
                            <h1 className='text-xl font-bold'>$20</h1>
                        </div>
                        <p className='text-sm my-2 text-gray-600'>Perfect mint green,Organic material</p>
                        <button className='text-pink-500 border hover:text-white hover:bg-pink-500 text-sm p-2 rounded-md  border-pink-300'>Add to Cart</button>
                    </div>
                </Link>
                <Link href={"/pages/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80 bg-gray-200'>
                        <Image className='absolute z-10 hover:opacity-0 transition-opacity ease duration-100' src={"/product1.jpg"} fill alt='product' />
                        <Image className='absolute' src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <div>
                        <div className='flex my-2 justify-between'>
                            <h1 className='text-xl font-bold'>Digital Incense</h1>
                            <h1 className='text-xl font-bold'>$20</h1>
                        </div>
                        <p className='text-sm my-2 text-gray-600'>Perfect mint green,Organic material</p>
                        <button className='text-pink-500 border hover:text-white hover:bg-pink-500 text-sm p-2 rounded-md  border-pink-300'>Add to Cart</button>
                    </div>
                </Link>
                <Link href={"/pages/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80 bg-gray-200'>
                        <Image className='absolute z-10 hover:opacity-0 transition-opacity ease duration-100' src={"/product1.jpg"} fill alt='product' />
                        <Image className='absolute' src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <div>
                        <div className='flex my-2 justify-between'>
                            <h1 className='text-xl font-bold'>Digital Incense</h1>
                            <h1 className='text-xl font-bold'>$20</h1>
                        </div>
                        <p className='text-sm my-2 text-gray-600'>Perfect mint green,Organic material</p>
                        <button className='text-pink-500 border hover:text-white hover:bg-pink-500 text-sm p-2 rounded-md  border-pink-300'>Add to Cart</button>
                    </div>
                </Link>
                <Link href={"/pages/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80 bg-gray-200'>
                        <Image className='absolute z-10 hover:opacity-0 transition-opacity ease duration-100' src={"/product1.jpg"} fill alt='product' />
                        <Image className='absolute' src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <div>
                        <div className='flex my-2 justify-between'>
                            <h1 className='text-xl font-bold'>Digital Incense</h1>
                            <h1 className='text-xl font-bold'>$20</h1>
                        </div>
                        <p className='text-sm my-2 text-gray-600'>Perfect mint green,Organic material</p>
                        <button className='text-pink-500 border hover:text-white hover:bg-pink-500 text-sm p-2 rounded-md  border-pink-300'>Add to Cart</button>
                    </div>
                </Link>
                <Link href={"/pages/test"} className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                    <div className='relative w-full h-80 bg-gray-200'>
                        <Image className='absolute z-10 hover:opacity-0 transition-opacity ease duration-100' src={"/product1.jpg"} fill alt='product' />
                        <Image className='absolute' src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <div>
                        <div className='flex my-2 justify-between'>
                            <h1 className='text-xl font-bold'>Digital Incense</h1>
                            <h1 className='text-xl font-bold'>$20</h1>
                        </div>
                        <p className='text-sm my-2 text-gray-600'>Perfect mint green,Organic material</p>
                        <button className='text-pink-500 border hover:text-white hover:bg-pink-500 text-sm p-2 rounded-md  border-pink-300'>Add to Cart</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductList