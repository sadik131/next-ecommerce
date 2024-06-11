"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Add() {
  const [qty, setqty] = useState(1)
  const itemLimit = 4

  const handelQty = (type: "i" | "d") => {
    if (type === "i" && qty >= 1 && qty < itemLimit) {
      setqty(qty + 1)
    }
    if (type === "d" && qty > 1) {
      setqty(qty - 1)
    }
    if(qty === itemLimit){
      toast.error("only 4 item")
    }
  }

  return (
    <div className='mt-5 flex flex-col'>
      <h1 className='font-bold'>Choose a quantity</h1>
      <div className='flex justify-between'>
        <div className='flex gap-x-4'>
          <div className='bg-gray-300 flex rounded-md px-6 '>
            <div className='flex items-center justify-center gap-4'>
              <button onClick={() => handelQty("d")}>-</button>
              {qty}
              <button onClick={() => handelQty("i")}>+</button>
            </div>
          </div>
          <p>only <span className='text-orange-400 text-sm'>4 items</span> left! <br />Don't miss it</p>
        </div>
        <button className='border border-pink-400 text-pink-400 px-4 rounded-md hover:bg-pink-400 hover:text-white'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Add