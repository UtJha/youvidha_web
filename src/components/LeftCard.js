import React from 'react'

const LeftCard = () => {
  return (
    <>
   <div className="flex-col ml-4">
        
        <div className="flex-col box-border rounded-lg  w-76 pl-6 pt-6 pb-6 pr-10 border-2 my-4 shadow-2xl">
        <p className='mt-2 flex'><img src='' alt='img'/><a href="/" className='ml-5'>Home</a></p>
        <p className='mt-3 flex'><img src='' alt='img'/><a href="/" className='ml-5'>Trending</a></p>
        <p className='mt-3 flex'><img src='' alt='img'/><a href="/" className='ml-5'>Activity</a></p>
        <p className='mt-3 flex'><img src='' alt='img'/><a href="/" className='ml-5'>Create</a></p>
        </div>
        <div className=" rounded-lg w-76 pl-6 pt-6 pb-6  pr-10 border-2 shadow-2xl">
        <div className='flex w-56 box-border border-2 rounded-lg'>
            <input className='flex-1 h-6 w-20' type="search" name="search-bar" placeholder='search' />
            <img className='flex-none h-6 w-4' src="" alt="icon" />
        </div>
        <div className=' mt-3 box-border border-2 rounded-lg'>
            <p className='my-2'>location</p>
            <p className='my-2'>location</p>
        </div>
        </div>
        </div>
    </>
  )
}

export default LeftCard
