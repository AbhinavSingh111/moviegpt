import React from 'react';

const Shimmer = () => {
  return (
    <div>
        <div className='p-4 m-4 bg-black text-white'>
        <div>
            {
                movieNames.map((movieName , index)=>(
                    <MovieList key={movieName} title={movieName} movies={movieResults[index]}/>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Shimmer;