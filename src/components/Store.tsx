import React from "react";
import items from "../data/items.json";
import { StoreItem } from "./StoreItem";

export const Store = () => {
  console.log(items);
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex justify-center items-start space-x-8 pt-20 flex-wrap">
        {items.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
