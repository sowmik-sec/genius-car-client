import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-xl font-bold text-orange-500">Popular Products</p>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="w-1/2 mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1 mt-10">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn btn-outline btn-warning">More Products</button>
      </div>
    </div>
  );
};

export default Products;
