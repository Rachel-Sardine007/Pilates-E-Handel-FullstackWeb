import { Link } from "react-router-dom";
import {FiSearch, FiShoppingBag, FiUser} from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
    return ( 
    <nav className="navbar">
        <div className="nav-logo">
            <Link to={'/'}>FORMA</Link>
        </div>
        <div className="nav-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/shop"}>Shop</Link>
            <Link to={"/about"}>About</Link>
        </div>

        <div className="nav-icons">
            <FiSearch className="nav-icon"/>
            <Link to={'/login'}>
                <FiUser className="nav-icon"/>
            </Link>
            <Link to={'/cart'}>
                <FiShoppingBag className="nav-icon"/>
            </Link>
        </div>
    </nav>
     );
}

export default Navbar;