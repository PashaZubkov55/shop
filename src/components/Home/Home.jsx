import React from "react";
import Poster from '../Poster/Poster'
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import { useSelector } from "react-redux";

const Home = () => {
    const {products, categories} = useSelector((state)=>state)
  return (
    <>
      <Poster/>
      <Products products={products.list} amount={5} title="Trending" />
      <Categories products={categories.list} amount={5} title="Worth seeing" />
      
    </>
  );
};

export default Home;
