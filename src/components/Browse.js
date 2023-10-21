import Header from "./Header";

const Browse = () =>{
    return (
        <div>
            {console.log("browser before header render")}
            <Header />
            {console.log("browser after header render")}
        </div>
    );
};

export default Browse;