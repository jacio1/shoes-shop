"use client";

import {
  Heart,
  LayoutGrid,
  SearchIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export default function Header() {
  const openCatalogue = () => {};

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link
            className="flex items-center gap-2 text-2xl font-bold bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            href="/"
          >
            <ShoppingBag className="h-7 w-7 text-primary" />
            GodShoes
          </Link>
        </div>

        <div className="flex items-center gap-2 flex-1 max-w-2xl ">
          <Button className="gap-2 shrink-0" onClick={openCatalogue} size={'lg'}>
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden md:inline">Каталог</span>
          </Button>
          <InputGroup className="h-">
            <InputGroupInput  placeholder="Поиск..." />
            <InputGroupAddon className="h-9">
              <SearchIcon className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center gap-1">
          <Button size={'lg'}>
            <span className="hidden sm:inline">Войти</span>
            <span className="sm:hidden">👤</span>
          </Button>
          <div className="h-6 w-px bg-border mx-1" />

          <Link
            href="/favorites"
            className="group relative rounded-full p-2 hover:bg-muted transition-all"
          >
            <Heart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
              3
            </span>
          </Link>

          <Link
            href="/cart"
            className="group relative rounded-full p-2 hover:bg-muted transition-all"
          >
            <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
