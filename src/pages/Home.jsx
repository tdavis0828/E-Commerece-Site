import React, { useEffect, useState } from "react";
import { StyledHome } from "../styles/StyleSheet";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";
import { nanoid } from "nanoid";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <StyledHome>
      <PromoBanner />
      <div className="products-container">
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                price={product.price}
                image={product.image}
                desc={product.description}
                title={product.title}
                key={nanoid()}
              />
            );
          })}
      </div>
    </StyledHome>
  );
};

export default Home;
