import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { UPCOMING } from "../utils/constants";

const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);
    const latestMovies = async () => {
        const data = await fetch(UPCOMING,API_OPTIONS);
        const json  = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    };

    useEffect(()=>{
        if(!upcomingMovies) latestMovies();;
        
    },[])
};
export default useUpcoming;