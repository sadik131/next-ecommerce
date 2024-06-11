import React from 'react'

function Filter() {
    return (
        <div className='my-5'>
            <div className='flex flex-wrap gap-2 justify-between items-center'>
                <select className='py-4 px-2 rounded-2xl bg-gray-100' name='type'>
                    <option value="Physical">Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <input type="number" placeholder='min' className='text-xs rounded-2xl py-2 px-1 border border-gray-500' />
                <input type="number" placeholder='max' className='text-xs rounded-2xl py-2 px-1 border border-gray-500' />
                <select className='py-4 px-2 rounded-2xl bg-gray-100' name='size'>
                    <option value="Physical">Size</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select className='py-4 px-2 rounded-2xl bg-gray-100' name='color'>
                    <option value="Physical">Color</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select className='py-4 px-2 rounded-2xl bg-gray-100' name='category'>
                    <option value="Physical">Category</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select className='py-4 px-2 rounded-2xl bg-gray-100' name='All filter'>
                    <option value="Physical">All filter</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select className='py-4 px-2 rounded-2xl border' name='SortBy'>
                    <option value="Physical">Sort By</option>
                    <option value="Physical">Price (high to low)</option>
                    <option value="Physical">Price (low to high)</option>
                    <option value="Digital">Newest</option>
                    <option value="Digital">Oldest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter