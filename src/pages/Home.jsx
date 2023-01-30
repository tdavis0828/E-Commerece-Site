import React, { useEffect, useState } from "react";
import { StyledHome } from "../styles/StyleSheet";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <StyledHome>
      <Navbar />
      <PromoBanner />
      <div className="products-container">
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                price={product.price}
                image={product.image}
                desc={product.description}
                title={product.title}
              />
            );
          })}
      </div>
    </StyledHome>
  );
};

export default Home;
