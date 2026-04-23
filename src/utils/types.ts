import type { Dispatch, SetStateAction } from "react";

type ProductItem = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type ProductCard = {
  productItem: ProductItem;
};

type Order = {
  cartItem: CartItem;
};

type MainContext = [
  Map<number, CartItem>,
  Dispatch<SetStateAction<Map<number, CartItem>>>,
];

export type { ProductItem, CartItem, ProductCard, MainContext, Order };
