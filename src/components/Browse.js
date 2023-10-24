import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useDiscover from "../hooks/useDiscover";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () =>{
    useNowPlaying();
    usePopular();
    useTopRated();
    useUpcoming();
    useDiscover();
    const gptView = useSelector((store)=>store.gpt.showGptsearch);


    return (
        <div>
            <Header />
            {gptView ? <GptSearch /> : 
            (<>
                <MainContainer />
                <SecondaryContainer />
            </>
            )
            }
        </div>
    );
};

export default Browse;