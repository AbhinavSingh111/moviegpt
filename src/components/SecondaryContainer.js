import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  // console.log(movies);
  return (
    movies.nowPlayingMovies && 
    (
    <div className='bg-black'>
      <div className='-mt-52 relative pl-12 z-10'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Discover"} movies={movies.discoverMovies} />
      <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
      </div>
    </div>)
  )
}

export default SecondaryContainer