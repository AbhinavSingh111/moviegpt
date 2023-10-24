import { useEffect } from "react";
import { API_OPTIONS, VIDEOS_LINK } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";

const useVideos = (id) => {
    const dispatch = useDispatch(); 
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
    const movieVideo = async ()=>{
        const data = await fetch(VIDEOS_LINK+id+'/videos',API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{
        if(!trailerVideo) movieVideo();
        
    } , []);
};

export default useVideos;