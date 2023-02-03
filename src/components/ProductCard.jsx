import React, { useState } from "react";
import { StyledProductCard } from "../styles/StyleSheet";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ price, image, desc, title }) => {
  let [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  function increaseQty() {
    setQty(qty++);
    console.log("clicked");
  }

  function decreaseQty() {
    if (qty >= 1) {
      setQty(qty - 1);
    }
  }

  function handleClick(el) {
    const Product = {
      title: title,
      imageURL: image,
      price: price,
      description: desc,
      qty: qty,
    };
    dispatch(addToCart(Product));
  }

  return (
    <StyledProductCard id="card-container">
      <img src={image} alt={desc} />
      <p>{title}</p>
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
        <div onClick={handleClick}>
          <button className="add-btn">Add to cart</button>
        </div>
      </div>
      <p className="price">${price}</p>
    </StyledProductCard>
  );
};

export default ProductCard;
