import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
  const {auth,handlelogout}=React.useContext(AuthContext)
  const {cart,setCart}=React.useContext(CartContext)
  React.useEffect(()=>{
    fetch(`http://localhost:8080/cartItems`).then((resp)=>(resp.json())).then((resp)=>{
      setCart(resp)
    })
  },[])
  return (
    <div style={{display:"flex",justifyContent:"end"}} data-cy="navbar">
      <Link to="/" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:({cart.length})</span>
      <button onClick={handlelogout} data-cy="navbar-login-logout-button">{auth ? "Logout":<Link to="/login">Login</Link>}</button>
    </div>
  );
};

export default Navbar;
