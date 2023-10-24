import React from 'react';

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-5 test-lg w-1/4'>{overview}</p>
      <div className='my-4 md:my-0'>
      <button className="px-3 md:px-4 py-1 md:py-2 text-black text-xl  rounded-lg bg-white items-center shadow-lg hover:bg-opacity-80 cursor-pointer" >Play</button>
      <button className="hidden md:inline-block px-4 py-2 text-white text-xl mx-2 rounded-lg bg-gray-500 items-center shadow-lg hover:bg-opacity-80 cursor-pointer" >More Info</button>
      </div>
    </div>

  )
}

export default VideoTitle;