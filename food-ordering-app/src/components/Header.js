import { Link } from 'react-router-dom';
import logo from '../../src/images/foo-app-logo.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { logout } from '../slice/authSlice';
const Header = () =>{
    const cartItems = useSelector((state)=> state.cart.items); // Get cart items from redux
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food Ordering App"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart" className="cart-icon">
                        <FaShoppingCart size={22}/>
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </Link></li>
                    {isAuthenticated ? (
                        <li>
                        <button className="logout-button" onClick={() => dispatch(logout())}>Logout</button>
                        </li>
                    ) : (
                        <li>
                        <Link to="/login" className="login-button">Login</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;