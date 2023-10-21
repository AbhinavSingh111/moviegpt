import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";
import { POPULAR_MOVIES } from "../utils/constants";

const usePopular = ()=>{
    const dispatch = useDispatch();
    const latestMovies = async () => {
        const data = await fetch(POPULAR_MOVIES,API_OPTIONS);
        const json  = await data.json();
        dispatch(addPopularMovies(json?.results));
    };

    useEffect(()=>{
        latestMovies();
    },[])
};
export default usePopular;