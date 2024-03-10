import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100, // Adjust scroll amount as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100, // Adjust scroll amount as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  return (
    <div className="px-6 ">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="relative">
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
          onClick={scrollLeft}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z" clipRule="evenodd" />
        </svg>
        
        </button>
        <div
          ref={containerRef}
          className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* <div className="flex overflow-x-scroll scrollbar-hide"> */}
            <div className="flex"> 
              {movies?.map((movie) => (
                <MovieCard key={movie.id} poster={movie.poster_path} />
              ))}
            </div>
          {/* </div> */}
        </div>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
          onClick={scrollRight}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.707 4.293a1 1 0 00-1.414 1.414L13.586 10l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4z" clipRule="evenodd" />
        </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
