import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink


const Navbar = () => {
  const {auth}=React.useContext(AuthContext)
  const {cart,setCart}=React.useContext(CartContext)
  React.useEffect(()=>{
    fetch(`http://localhost:8080/cartItems`).then((resp)=>(resp.json())).then((resp)=>{
      setCart(resp)
    })
  },[])
  return (
    <div data-cy="navbar">
      <Link to="/home" data-cy="navbar-home-link">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:{cart.length}</span>
      <button data-cy="navbar-login-logout-button">{auth ? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
