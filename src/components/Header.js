import {NF_LOGO_IMG,NF_USER_IMG} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { removeNowPlayingMovies } from "../redux/moviesSlice";

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user);
    const handleClick = ()=>{
      signOut(auth).then(() => {
        dispatch(removeUser());
        // dispatch(removeNowPlayingMovies());
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
      
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
            console.log("user added msg coming from head");
            navigate("/browse");
            console.log("navigated to browse from head");
          } else {
            // User is signed out
            console.log("head render triggered via use effect");
            
          }
        });

        // unsubscribing when the componet unmounts
        return () => unsubscribe();
      },[]);

    return (
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex">
          <img className="w-40" src={NF_LOGO_IMG} alt="logo" />
          {user && (<div className="flex p-2 ml-auto">
            <img className="w-10" src={NF_USER_IMG} alt="user logo" />
            <button className="px-4 py-2 mx-4 rounded-lg bg-red-500 items-center shadow-lg hover:bg-red-600" onClick={handleClick}>Sign Out</button>
          </div>)
          }
          {console.log("head rendered")};
        </div>
        
    )
};

export default Header;