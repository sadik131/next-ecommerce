import Add from '@/app/components/Add'
import Customiza from '@/app/components/Customiza'
import Images from '@/app/components/Images'
import React from 'react'

function page() {
  return (
    <div className='padding my-10 flex flex-col lg:flex-row gap-10'>
      <div className='w-full lg:w-1/2'>
        <Images></Images>
      </div>
      <div className='w-full flex flex-col gap-4 lg:w-1/2'>
        <h1 className='text-4xl '>Disital Incence</h1>
        <p className='font-medium text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eligendi nesciunt ad neque beatae sit blanditiis voluptatibus eius iure reprehenderit obcaecati, est dolor ex voluptatem, tenetur maiores cum officiis. Aliquid?</p>
        <div className='flex gap-5'>
          <h1 className='text-xl text-gray-500 font-bold'>$45</h1>
          <h1 className='text-2xl text-black font-bold'>$40</h1>
        </div>
        <div className='h-[2px] bg-gray-100' />
        <Customiza></Customiza>
        <Add></Add>
        <div className='h-[2px] bg-gray-100' />
        <div className='text-sm'>
          <h3 className='font-medium mb-5'>Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos et voluptatibus aperiam numquam obcaecati ipsum aut? Fuga voluptatum dolorem distinctio repellendus, cupiditate molestias, quis laborum nesciunt corporis, sit ex est.</p>
        </div>
        <div className='text-sm'>
          <h3 className='font-medium mb-5'>Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos et voluptatibus aperiam numquam obcaecati ipsum aut? Fuga voluptatum dolorem distinctio repellendus, cupiditate molestias, quis laborum nesciunt corporis, sit ex est.</p>
        </div>
        <div className='text-sm'>
          <h3 className='font-medium mb-5'>Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos et voluptatibus aperiam numquam obcaecati ipsum aut? Fuga voluptatum dolorem distinctio repellendus, cupiditate molestias, quis laborum nesciunt corporis, sit ex est.</p>
        </div>
      </div>
    </div>
  )
}

export default page