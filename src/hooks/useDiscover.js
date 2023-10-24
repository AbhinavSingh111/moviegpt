import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addDiscoverMovies } from "../redux/moviesSlice";
import { DISCOVER } from "../utils/constants";

const useDiscover = ()=>{
    const dispatch = useDispatch();
    const discoverMovies = useSelector((store)=>store.movies.discoverMovies);
    const latestMovies = async () => {
        const data = await fetch(DISCOVER,API_OPTIONS);
        const json  = await data.json();
        dispatch(addDiscoverMovies(json?.results));
    };

    useEffect(()=>{
        if(!discoverMovies) latestMovies();
        
    },[])
};
export default useDiscover;