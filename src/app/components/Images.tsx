"use client"
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageData {
    url:string,
    id:number
}
function Images() {

    const images:ImageData[] = [
        { id: 1, url: "/p1.jpg" },
        { id: 2, url: "/p2.jpg" },
        { id: 3, url: "/p4.jpg" },
    ]

    const [index, setIndex] = useState<number>(0)
    return (
        <div className='sticky top-20'>
            <div className='relative w-full mb-5 h-[500px]'>
                <Image sizes='50vw' src={images[index].url} alt='product' fill className='object-cover rounded-md' />
            </div>
            <div className='flex justify-between items-center'>
                {images.map((img,index) => {
                   return <div key={img.id} className='w-20 h-20 relative cursor-pointer'>
                        <Image onClick={() => setIndex(index)} src={img.url} alt='product' sizes='50vw' fill className='object-cover rounded-md' />
                    </div>
                })}

            </div>
        </div>
    )
}

export default Images