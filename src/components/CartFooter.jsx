import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledCartFooter } from "../styles/StyleSheet";

const CartFooter = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const { products } = useSelector((state) => state.cart);

  function calculateCart() {
    const prices = [];

    products.map((product) => {
      prices.push(product.price);
      return prices;
    });
    var sum = prices.reduce(function (a, b) {
      return a + b;
    }, 0);

    setSubtotal(sum);
    const total = sum + 5.99;
    setTotal(total);
  }

  useEffect(() => {
    calculateCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <StyledCartFooter>
      <p>Shipping: $5.99</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
      <button type="button">Checkout</button>
    </StyledCartFooter>
  );
};

export default CartFooter;
