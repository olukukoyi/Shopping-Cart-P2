import React, { createContext, useContext, useState } from "react";

type StoreContextProps = {
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getItemQuantity: (id: number) => number;
};

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

//value props

const ShoppingCartContext = createContext({} as StoreContextProps);

export const useStore = () => {
  return useContext(ShoppingCartContext);
};

// .provider while creating value functions

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([] as CartItem[]); // created cart

  // increaseCartQuantity
  // decreaseCartQuantity
  // removeFromCart
  // getItemQuantity

  const increaseCartQuantity = (id: number) => {
    setCartItems((cart) => {
      const found = cart?.find((item) => {
        item.id === id;
      }); // if item is in cart
      if (found == null) {
        return [...cart, { id, quantity: 1 }];
      } else {
        cart?.map((item) => {
          if (item.id === id) {
            return { item, quantity: item.quantity + 1 };
          }
        });
      }
      return cart;
    });
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((cart) => {
      const found = cart?.find((item) => {
        item.id === id;
      })?.quantity; // if item is in cart, get the quantity

      if (found === 1) {
        return cart?.filter((item) => item.id != id);
      } else {
        cart?.map((item) => {
          if (item.id === id) {
            return { item, quantity: item.quantity + 1 };
          }
        });
      }
      return cart;
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ increaseCartQuantity, decreaseCartQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
