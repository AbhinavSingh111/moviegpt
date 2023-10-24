import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";
import { PLAYING_NOW } from "../utils/constants";

const useNowPlaying = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
    const latestMovies = async () => {
        const data = await fetch(PLAYING_NOW,API_OPTIONS);
        const json  = await data.json();
        dispatch(addNowPlayingMovies(json?.results));
    };

    useEffect(()=>{
        if(!nowPlayingMovies) latestMovies();   
    },[])
};
export default useNowPlaying;