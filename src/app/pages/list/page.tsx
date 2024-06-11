import Filter from '@/app/components/Filter'
import ProductList from '@/app/components/ProductList'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='padding'>
      <div className='h-60 bg-pink-50 md:px-5  flex justify-between items-center'>
        <div className='w-2/3'>
          <h1 className='text-xl font-bold text-gray-600'>Grad up to 50% off on <br /> Selected Products</h1>
          <button className='rounded-3xl bg-pink-400 text-white px-4 py-2'>Buy Now</button>
        </div>
        <div className='w-1/3 h-[240px] relative'>
          <Image src="/woman.png" alt='banner' fill className='object-cover' />
        </div>
      </div>
      {/* filter */}
      <Filter />
      <h1 className='title'>All Product</h1>
      <ProductList></ProductList>
    </div>
  )
}

export default page