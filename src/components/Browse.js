import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useDiscover from "../hooks/useDiscover";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () =>{
    useNowPlaying();
    usePopular();
    useTopRated();
    useUpcoming();
    useDiscover();


    return (
        <div>
            {console.log("browser before header render")}
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {console.log("browser after header render")}
        </div>
    );
};

export default Browse;