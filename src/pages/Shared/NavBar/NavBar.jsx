import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import FacebookIcon from '../../../assets/Facebook_Logo.png';
import YoutubeIcon from '../../../assets/Youtube.png';
import InstagramIcon from '../../../assets/instagram.jpg';
import xIcon from '../../../assets/X Logo.png';
import LinkdenIcon from '../../../assets/Linkden Logo.png';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/OurEvent">Our Event</Link></li>
            <li><Link to="/FreeClass">Free Class</Link></li>
            {user ? (
                <>
                    <span>{user?.displayName}</span>
                    <li><Link to="/Class">Class</Link></li>
                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                </>
            ) : (
                <>
                    <li><Link to="/login">Login</Link></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar fixed z-10 max-w-screen-xl bg-fuchsia-600 text-white lg:text-white text-black">
            <div className="navbar-start flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        Menu
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:text-white text-black">
                        {navOptions}
                    </ul>
                </div>
                <a className="normal-case text-xl ml-4">
                    Race Family <br />
                    01869296343 <br />
                    racefamilybd@gmail.com
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="flex-none flex items-center ml-4 space-x-6">
                <a href="https://www.facebook.com/bdracefamily" target="_blank" rel="noopener noreferrer">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a> 
                <a href="https://www.youtube.com/channel/UC5WLCK7ObCHGbWCw0gsmHbw" target="_blank" rel="noopener noreferrer">
                    <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/sisarkarbd/" target="_blank" rel="noopener noreferrer">
                    <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://x.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer">
                    <img src={xIcon} alt="x" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/sisarkarbd" target="_blank" rel="noopener noreferrer">
                    <img src={LinkdenIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
