import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState("Store");
  const updateHeader = (e: any) => {
    setActive(e.target.textContent);
  };
  const quantity = 1;
  return (
    <div className="flex  justify-between w-full px-10 pt-4 ">
      <div className="flex space-x-4">
        <Link
          to="/"
          className={`cursor-pointer font-light ${
            active === "Home" && "underline font-bold"
          } `}
          onClick={updateHeader}
        >
          Home
        </Link>
        <Link
          to="/store"
          className={`cursor-pointer font-light ${
            active === "Store" && "underline font-bold"
          } `}
          onClick={updateHeader}
        >
          Store
        </Link>
        <Link
          to="/about"
          className={`cursor-pointer font-light ${
            active === "About" && "underline font-bold"
          } `}
          onClick={updateHeader}
        >
          About
        </Link>
      </div>
      <h3>Cart: {quantity}</h3>
    </div>
  );
};
