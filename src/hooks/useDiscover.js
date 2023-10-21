import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addDiscoverMovies } from "../redux/moviesSlice";
import { DISCOVER } from "../utils/constants";

const useDiscover = ()=>{
    const dispatch = useDispatch();
    const latestMovies = async () => {
        const data = await fetch(DISCOVER,API_OPTIONS);
        const json  = await data.json();
        dispatch(addDiscoverMovies(json?.results));
    };

    useEffect(()=>{
        latestMovies();
    },[])
};
export default useDiscover;