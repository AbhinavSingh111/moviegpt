import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { TOP_RATED } from "../utils/constants";

const useTopRated = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
    const latestMovies = async () => {
        const data = await fetch(TOP_RATED,API_OPTIONS);
        const json  = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    };

    useEffect(()=>{
        if(!topRatedMovies) latestMovies();
        
    },[])
};
export default useTopRated;