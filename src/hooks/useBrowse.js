import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";


const useBrowse = ()=>{
    const dispatch = useDispatch();
    const latestMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTIONS);
        const json  = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        latestMovies();
    },[])
}
export default useBrowse;