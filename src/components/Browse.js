import useBrowse from "../hooks/useBrowse";
import Header from "./Header";


const Browse = () =>{
    useBrowse();
    return (
        <div>
            {console.log("browser before header render")}
            <Header />
            {console.log("browser after header render")}
        </div>
    );
};

export default Browse;