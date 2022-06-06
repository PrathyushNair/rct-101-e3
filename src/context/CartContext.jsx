import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  let [cart,setCart]=React.useState([])
  let addtocart=(id)=>{
    fetch(`http://localhost:8080/cartItems`,{method:"POST",headers:{"Content-Type":"application/json"},
  body:JSON.stringify({productId:id,count:1})})
  }
  return <CartContext.Provider value={{addtocart}}>{children}</CartContext.Provider>;
};
