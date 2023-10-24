import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";
import { POPULAR_MOVIES } from "../utils/constants";

const usePopular = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);
    const latestMovies = async () => {
        const data = await fetch(POPULAR_MOVIES,API_OPTIONS);
        const json  = await data.json();
        dispatch(addPopularMovies(json?.results));
    };

    useEffect(()=>{
        if(!popularMovies) latestMovies();
        
    },[])
};
export default usePopular;