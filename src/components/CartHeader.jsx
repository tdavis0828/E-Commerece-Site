import React from "react";
import { StyledCartHeader } from "../styles/StyleSheet";

const CartHeader = () => {
  return (
    <StyledCartHeader>
      <p>Description</p>
      <p>Qty.</p>
      <p>Remove</p>
      <p>Price</p>
    </StyledCartHeader>
  );
};

export default CartHeader;
