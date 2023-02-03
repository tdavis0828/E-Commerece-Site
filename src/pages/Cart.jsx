import React from "react";
import { useSelector } from "react-redux";
import { StyledCart } from "../styles/StyleSheet";
import CartHeader from "../components/CartHeader";
import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <StyledCart>
      <CartHeader />
      {products.map((product) => {
        return (
          <CartItem
            desc={product.description}
            image={product.imageURL}
            qty={product.qty}
            price={product.price}
          />
        );
      })}
      <CartFooter />
    </StyledCart>
  );
};

export default Cart;
