import {NF_LOGO_IMG,NF_USER_IMG, SUPPORTED_LANG} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
// import { removeNowPlayingMovies } from "../redux/moviesSlice";
import { toggleGptSearchView } from "../redux/gptSlice";
import { changeLanguage } from "../redux/configSlice";

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user);
    const gptView = useSelector((store)=>store.gpt.showGptsearch);

    const handleClick = ()=>{
      signOut(auth).then(() => {
        dispatch(removeUser());
        // dispatch(removeNowPlayingMovies());
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
      
    };

    const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value));
    };

    const handleGptClick = ()=>{
      dispatch(toggleGptSearchView());
    }

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName,photoURL:photoURL}));
            // console.log("user added msg coming from head");
            navigate("/browse");
            // console.log("navigated to browse from head");
          } else {
            // User is signed out
            navigate("/")
            // console.log("head render triggered via use effect");
            
          }
        });

        // unsubscribing when the componet unmounts
        return () => unsubscribe();
      },[]);

    return (
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row  md:justify-between">
          <img className="w-24 mx-auto md:mx-0 mix-blend-multiply" src={NF_LOGO_IMG} alt="logo" />
          {user && (<div className="flex p-2 md:ml-auto justify-between ">
            {
             gptView&&( <select className="px-1 pr-3 py-2 mx-4 h-12  bg-white rounded-lg md:hover:bg-opacity-80" onChange={handleLanguageChange}>
                {SUPPORTED_LANG.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
              </select>)
            }
            <button className="px-2 py-2 mx-4 h-12 rounded-lg bg-red-700 items-center shadow-lg md:hover:bg-opacity-80" onClick={handleGptClick}>
              {gptView ? "Home" : "GPT Search"}</button>
            <img className="hidden md:block w-10 h-12" src={NF_USER_IMG} alt="user logo" />
            <button className="px-2 py-2 mx-4 h-12 rounded-lg bg-white items-center shadow-lg md:hover:bg-opacity-80" onClick={handleClick}>Sign Out</button>
          </div>)
          }
        </div>
        
    )
};

export default Header;