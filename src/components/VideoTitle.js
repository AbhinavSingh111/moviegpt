import React from 'react';

const VideoTitle = ({title , overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-5 test-lg w-1/4'>{overview}</p>
      <div>
      <button className="px-4 py-2 text-black text-xl mx-2 rounded-lg bg-white items-center shadow-lg hover:bg-opacity-80 cursor-pointer" >Play</button>
      <button className="px-4 py-2 text-white text-xl mx-2 rounded-lg bg-gray-500 items-center shadow-lg hover:bg-opacity-80 cursor-pointer" >More Info</button>
      </div>
    </div>

  )
}

export default VideoTitle;