import React from 'react'
import SearchBarGpt from './SearchBarGpt';
import { NF_BG_IMG } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <>
          <div className='fixed -z-10'> 
              <img className='h-screen w-screen object-cover' src={NF_BG_IMG} alt='background'  />
          </div>
          <div className=''>
            <SearchBarGpt />
            <GptMovieSuggestions />
          </div>
    </>
    
  )
}

export default GptSearch;