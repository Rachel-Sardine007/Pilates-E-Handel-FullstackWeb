import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiUser, FiX, FiMenu } from "react-icons/fi";
import "./Navbar.css";
import { useCart } from '../contexts/CartContext.jsx';
import { useState } from "react";

function Navbar() {
    const { cartCount } = useCart();

    // responsive component
    const [isOpen, setIsOpen] = useState(false);

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
             <Link to={'/cart'}>
            { cartCount !== 0 && <p>({cartCount})</p>}
            </Link>
        </div>


        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {isOpen && (
            <div className="mobile-menu">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>

            <div className="mobile-icons">
                <FiSearch />
                <Link to="/login"><FiUser /></Link>
                <Link to="/cart"><FiShoppingBag /></Link>
            </div>
            </div>
        )}
    </nav>
     );
}

export default Navbar;