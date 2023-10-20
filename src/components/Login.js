import Header from "./Header";
import {NF_BG_IMG} from "../utils/constants";
import { useState, useRef } from "react";
import {isValidSignIn, isValidSignUp} from "../utils/validation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = ()=>{
    const [isSinedIn , setIsSignedIN] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleToggleSign = ()=>{
        setIsSignedIN(!isSinedIn);
    }
    const handleSubmit= ()=>{
        if(isSinedIn){
            const validationResultSignedIn = isValidSignIn(email.current.value , password.current.value);
            setErrorMessage(validationResultSignedIn);
            if(validationResultSignedIn) return;
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
        }
        else{
            const validationResultSignedUp = isValidSignUp(name.current.value, email.current.value , password.current.value);
            setErrorMessage(validationResultSignedUp);
            // signup login
            if(validationResultSignedUp) return;
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                    // ..
                });
                            
        }
        
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={NF_BG_IMG} alt="background" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black bg-opacity-70 w-3/12 my-36 mx-auto right-0 left-0 text-white">
                <h1 className=" text-white text-3xl font-bold py-4">{isSinedIn?"Sign In":"Sign Up"}</h1>
                {!isSinedIn &&<input autoComplete="name" ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-950" />}
                <input autoComplete="email" ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-950" />
                <input autoComplete="current-password" ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-950" />
                <p className="text-red-600">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full cursor-pointer" onClick={handleSubmit}>{isSinedIn?"Sign In":"Sign Up"}</button>
                <p className="py-4 underline cursor-pointer" onClick={handleToggleSign}>{isSinedIn ?"New to MovieGPT ? Sign Up Now !":"Already a User? Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;