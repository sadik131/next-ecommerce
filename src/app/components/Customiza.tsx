import React from 'react'

function Customiza() {
    return (
        <div className='flex gap-3 flex-col'>
            <h4>Choose Color</h4>
            <ul className='flex items-center gap-4'>
                <li className='relative h-8 w-8 bg-red-500 rounded-full cursor-pointer'>
                    <div className='absolute top-[-3px] left-[-3px] h-10 w-10 rounded-full ring-2'></div>
                </li>
                <li className='relative h-8 w-8 bg-blue-500 cursor-pointer rounded-full '>
                </li>
                <li className='relative h-8 w-8 bg-green-500 rounded-full cursor-not-allowed'>
                    <div className='absolute top-1/2 h-[2px] rotate-45 bg-white w-10 rounded-full '></div>
                </li>
            </ul>
            <div className='flex flex-col gap-y-4 mt-5'>
                <h1 className='font-bold'>Choose a size</h1>
                <div className='flex gap-x-5'>
                    <button className='bg-pink-400 text-white px-4 py-2 rounded-md ring-1 ring-pink-400'>Small</button>
                    <button className='bg-white-400 text-pink-400 px-4 py-2 rounded-md ring-1 ring-pink-400'>Mediun</button>
                    <button disabled className='disabled:bg-pink-200 bg-pink-400 text-white px-4 py-2 rounded-md disabled:cursor-not-allowed'>Large</button>
                </div>
            </div>
        </div>
    )
}

export default Customiza