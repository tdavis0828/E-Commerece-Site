import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StyledCart } from "../styles/StyleSheet";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import CartHeader from "../components/CartHeader";
import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import RemovedPopup from "../components/RemovedPopup";

const Cart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [popup, setPopup] = useState(false);

  return (
    <StyledCart>
      <CartHeader />
      {products.length ? (
        products.map((product) => {
          return (
            <CartItem
              desc={product.description}
              image={product.imageURL}
              qty={product.qty}
              price={product.price}
              key={nanoid()}
              onClick={() => {
                dispatch(removeFromCart(product.id));
                setPopup(true);
                setTimeout(() => {
                  setPopup(false);
                }, 3000);
              }}
            />
          );
        })
      ) : (
        <p className="empty-cart">
          OOPS! Looks like your cart is empty! Continue{" "}
          <Link to="/">Shopping</Link>
        </p>
      )}
      {popup && <RemovedPopup />}
      <CartFooter />
    </StyledCart>
  );
};

export default Cart;
