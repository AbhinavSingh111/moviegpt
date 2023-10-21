import useBrowse from "../hooks/useBrowse";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () =>{
    useBrowse();
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