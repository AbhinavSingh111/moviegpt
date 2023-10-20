import {NF_LOGO_IMG} from "../utils/constants";
const Header = ()=>{
    return (
        
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
          <img className="w-40" src={NF_LOGO_IMG} alt="logo" />
        </div>
        
    )
};

export default Header;