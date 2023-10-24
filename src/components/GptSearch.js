import React from 'react'
import SearchBarGpt from './SearchBarGpt';
import { NF_BG_IMG } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'> 
            <img src={NF_BG_IMG} alt='background'  />
        </div>
        <SearchBarGpt />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;