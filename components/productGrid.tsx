"use client";

const products = [
  {
    id: 1,
    name: "Кроссовки Nike Air Max",
    price: 12999,
    image: "/sneaker-1.jpg",
    rating: 4.5,
  },
];
import { useState } from "react";
import {
  Filter,
  Grid3x3,
  List,
  ChevronDown,
  ShoppingCart,
  Heart,
} from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ProductGrid() {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("popular");

  return (
    <div className=" mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Каталог обуви</h2>
          <p className="text-sm text-muted-foreground">
            {products.length} товаров
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-auto appearance-none bg-muted rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="popular">По популярности</option>
              <option value="price-asc">По возрастанию цены</option>
              <option value="price-desc">По убыванию цены</option>
              <option value="rating">По рейтингу</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>

          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md transition-colors ${view === "grid" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md transition-colors ${view === "list" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Фильтры
          </Button>
        </div>
      </div>

      <div
        className={`grid ${
          view === "grid"
            ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            : "grid-cols-1 gap-4"
        }`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300 ${
              view === "list" ? "flex gap-4 p-4" : ""
            }`}
          >
            <div
              className={`relative ${view === "list" ? "w-32 h-32 shrink-0" : "aspect-square"} bg-muted/20`}
            >
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

            <div
              className={`${view === "list" ? "flex-1 flex flex-col justify-between p-2" : "p-3 md:p-4"}`}
            >
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
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <Button variant="outline" size="sm">
          Загрузить больше...
        </Button>
      </div>
    </div>
  );
}
