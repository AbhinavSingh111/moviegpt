import React from 'react';
import {POSTER_LINK} from '../utils/constants';

const MovieCard = ({poster}) => {
    if (!poster) return null;
  return (
    <div className='w-36 md:w-48 pr-4 '>
        <img src={POSTER_LINK+poster} alt='movie card'/>
    </div>
  )
}

export default MovieCard;