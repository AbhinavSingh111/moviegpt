import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { UPCOMING } from "../utils/constants";

const useUpcoming = ()=>{
    const dispatch = useDispatch();
    const latestMovies = async () => {
        const data = await fetch(UPCOMING,API_OPTIONS);
        const json  = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    };

    useEffect(()=>{
        latestMovies();
    },[])
};
export default useUpcoming;