import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-200 mt-5 p-8'>
      {/* top  */}
      <div className='block lg:flex gap-x-5'>
        {/* left  */}
        <div className='w-full md:w-1/2 lg:1/4 flex flex-col my-5 gap-y-2'>
          <Link className='text-xl font-medium' href={"/"}>Liklak</Link>
          <p>3252 Winding Way, Central Plaza, Willowbrook,CA 90210, united states</p>
          <p>liklak@gmail.com</p>
          <p>+0123456789</p>
          <div className='flex gap-x-4'>
            <Image src={"/facebook.png"} height={18} width={18} alt='socal' />
            <Image src={"/instagram.png"} height={18} width={18} alt='socal' />
            <Image src={"/youtube.png"} height={18} width={18} alt='socal' />
            <Image src={"/pinterest.png"} height={18} width={18} alt='socal' />
            <Image src={"/x.png"} height={18} width={18} alt='socal' />
          </div>
        </div>
        {/* center  */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col gap-y-5 justify-between '>
            <h1 className='font-bold'>Company</h1>
            <div className='flex flex-col gap-y-2'>
              <span>About Us</span>
              <span>careers</span>
              <span>Affilates</span>
              <span>Blog</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className='flex flex-col gap-y-5 justify-between '>
            <h1 className='font-bold'>Shop</h1>
            <div className='flex flex-col gap-y-2'>
              <span>New Arrivals</span>
              <span>Accessories</span>
              <span>Men</span>
              <span>Women</span>
              <span>All Products</span>
            </div>
          </div>
          <div className='flex flex-col gap-y-5 justify-between '>
            <h1 className='font-bold'>Help</h1>
            <div className='flex flex-col gap-y-2'>
              <span>Customer Service</span>
              <span>My Account</span>
              <span>Find a Store</span>
              <span>Leal & Privacy</span>
              <span>Gift Card</span>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className='w-full md:w-1/2 lg:1/4 flex flex-col gap-y-4'>
          <h1 className='text-xl font-medium'>Subscribe</h1>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quasi deleniti fugiat, enim libero placeat.</p>
          <div>
            <input type="text" className='p-2' placeholder='Email address' />
            <button className='bg-pink-500 text-white px-5 py-2'>Join</button>
          </div>
          <h1>Secure Payments</h1>
          <div className='flex gap-3'>
            <Image src={"/discover.png"} height={20} width={40} alt='socal' />
            <Image src={"/skrill.png"} height={20} width={40} alt='socal' />
            <Image src={"/paypal.png"} height={20} width={40} alt='socal' />
            <Image src={"/mastercard.png"} height={20} width={40} alt='socal' />
            <Image src={"/visa.png"} height={20} width={40} alt='socal' />
          </div>
        </div>
      </div>
      {/* bottom */}
      <div>

      </div>
    </div>
  )
}

export default Footer
