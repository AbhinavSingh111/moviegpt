import Header from "./Header";
import {NF_BG_IMG} from "../utils/constants";
import { useState } from "react";

const Login = ()=>{
    const [isSinedIn , setIsSignedIN] = useState(true);
    const handleToggleSign = ()=>{
        setIsSignedIN(!isSinedIn);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={NF_BG_IMG} alt="background" />
            </div>
            <form className="absolute p-12 bg-black bg-opacity-70 w-3/12 my-36 mx-auto right-0 left-0 text-white">
                <h1 className=" text-white text-3xl font-bold py-4">{isSinedIn?"Sign In":"Sign Up"}</h1>
                {!isSinedIn &&<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-950" />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-950" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-950" />
                <button className="p-4 my-6 bg-red-700 w-full cursor-pointer">{isSinedIn?"Sign In":"Sign Up"}</button>
                <p className="py-4 underline cursor-pointer" onClick={handleToggleSign}>{isSinedIn ?"New to MovieGPT ? Sign Up Now !":"Already a User? Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;