import React from "react";
import { StyledCartItem } from "../styles/StyleSheet";

const CartItem = ({ desc, image, qty, price, onClick }) => {
  return (
    <StyledCartItem>
      <div>
        <img src={image} alt={desc} />
        <p>{desc}</p>
      </div>
      <p>{qty}</p>
      <button type="button" onClick={onClick}>
        X
      </button>
      <p>${price}</p>
    </StyledCartItem>
  );
};

export default CartItem;
