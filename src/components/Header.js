import {NF_LOGO_IMG,NF_USER_IMG} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase";

const Header = ()=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
      
    }
    return (
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between flex">
          <img className="w-40" src={NF_LOGO_IMG} alt="logo" />
          <div className="flex p-2 m-2">
            <img className="w-10" src={NF_USER_IMG} alt="user logo" />
            <button className="px-4 py-2 mx-4 rounded-lg bg-red-500 items-center shadow-lg hover:bg-red-600" onClick={handleClick}>Sign Out</button>
          </div>
        </div>
        
    )
};

export default Header;