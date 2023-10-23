import React from 'react'
import SearchBarGpt from './SearchBarGpt';
import { NF_BG_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'> 
            <img src={NF_BG_IMG} alt='background'  />
        </div>
        <SearchBarGpt />
    </div>
  )
}

export default GptSearch;