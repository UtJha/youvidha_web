import React from 'react'

const RightBox = () => {
  return (
    <>
        <div className="flex-col mr-4">
        <div className='flex w-56 mt-3 ml-2 box-border border-2 rounded-lg shadow-2xl'>
            <input className='flex-1 h-6 w-40' type="search" name="search-bar" placeholder='search' />
            <img className='flex-none h-6 w-4' src="" alt="icon" />
        </div>
        <div className="container flex box-border rounded-lg  w-80 p-4 border-2 my-4 shadow-2xl">
        <a href="/"><img src="" alt="userImage" /></a>
        <p className='mx-2'>UserName</p>
        </div>
        <div className="container rounded-lg w-80 p-4 border-2 shadow-2xl">
            <h2>What's Happening</h2>
            <h4 className='my-2'>Content</h4>
            <hr />
            <h4 className='my-2'>Content</h4>
            <hr />
            <h4 className='my-2'>Content</h4>
        </div>
        </div>
        
    </>
  )
}

export default RightBox
