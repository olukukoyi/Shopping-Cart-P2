import React, { useState } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
};

export const StoreItem = (item: StoreItemProps) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex  w-[400px] h-[300px] border ">
      <div className="flex flex-col justify-between items-center w-full ">
        <div>{item.name}</div>
        <div className="flex justify-between w-full px-3">
          <div>{item.price} </div>
          {quantity > 0 ? (
            <div className="space-x-5">
              <button className="border px-2 py-1 bg-blue-500 hover:opacity-90 ease-in-out">
                Add +{" "}
              </button>
              <span> {quantity} </span>
              <button className="border px-2 py-1 bg-red-500 hover:opacity-70 ease-in-out">
                Decrease -{" "}
              </button>
            </div>
          ) : (
            <button
              className="px-3 w-3/4 bg-blue-500 rounded-lg mb-2 hover:opacity-75 "
              onClick={() => {
                setQuantity((prev) => {
                  return prev + 1;
                });
              }}
            >
              Add to Cart +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
