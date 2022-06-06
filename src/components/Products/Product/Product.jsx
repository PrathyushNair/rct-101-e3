import React from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({el}) => {
  // Note: this id should come from api
  const{addtocart}=React.useContext(CartContext)
  const product = { id: el.id };
  return (
    <div style={{border:"1px solid black"}} data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{el.name}</h3>
      <h6 data-cy="product-description">{el.description}</h6>
      <button onClick={()=>addtocart(product.id)} data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
           0
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
