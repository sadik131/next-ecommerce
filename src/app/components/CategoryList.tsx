import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList() {
    return (
        <div className='overflow-x-scroll scrollNone'>
            <div className='flex gap-4 md:gap-8'>
                <Link href="/pages/as" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
                <Link href="/list?cat='test'" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
                <Link href="/list?cat='test'" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
                <Link href="/list?cat='test'" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
                <Link href="/list?cat='test'" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
                <Link href="/list?cat='test'" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <div className='relative w-full h-80 bg-gray-400'>
                        <Image src={"/product2.jpg"} fill alt='product' />
                    </div>
                    <h1 className='my-2 font-bold'>Category Name</h1>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList