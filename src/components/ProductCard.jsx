import React, { useState } from "react";
import { StyledProductCard } from "../styles/StyleSheet";

const ProductCard = ({ price, image, desc, title }) => {
  let [qty, setQty] = useState(1);
  let [cartQty, setCartqty] = useState(0);

  function increaseQty() {
    setQty(qty++);
    console.log("clicked");
  }

  function decreaseQty() {
    if (qty >= 1) {
      setQty(qty - 1);
    }
  }

  function addToCart() {
    setCartqty(qty);
  }
  console.log(cartQty);
  return (
    <StyledProductCard>
      <img src={image} alt={desc} />
      <p>{title}</p>
      {/* <p>
        {desc.substring(0, 20)} {desc.length >= 20 && "..."}
      </p> */}
      <div className="btn-container">
        <div>
          <button onClick={decreaseQty}>-</button>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <button onClick={increaseQty}>+</button>
        </div>
        <div>
          <button className="add-btn" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <p className="price">${price}</p>
    </StyledProductCard>
  );
};

export default ProductCard;
