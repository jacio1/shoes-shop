"use client";

import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import ProductGridHeader from "./productGridHeader";
import LoadMore from "./LoadMore";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3000/products");

      const data = await response.json();
      setProducts(data.data);
    }

    getProducts();
  }, []);

  return (
    <div className=" mx-auto px-4 py-8">
      <ProductGridHeader />

      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`}
      >
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.model}</h1>
              <h2>{product.brand}</h2>
              <h3>{product.photo}</h3>
            </div>
          );
        })}
        {/* {products.map((product) => (
          <div
            key={product.id}
            className={`group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 `}
          >
            <div className={`relative aspect-square bg-muted/20`}>
              <Image
                width={356}
                height={356}
                loading="eager"
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.rating >= 4.5 && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Хит
                </span>
              )}
              <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur hover:bg-white transition-colors">
                <Heart className="h-4 w-4" />
              </button>
            </div>

            <div className="p-3 md:p-4">
              <div>
                <h3 className="font-medium text-sm md:text-base line-clamp-1 mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{product.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">
                  {product.price.toLocaleString()} ₽
                </span>
                <Button size="sm" className="rounded-full h-8 w-8 p-0">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      <LoadMore />
    </div>
  );
}
