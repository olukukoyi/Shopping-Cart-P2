import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Store } from "./components/Store";
import { Route, Routes } from "react-router";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { ShoppingCartProvider } from "./hooks/ShoppingCardContext";

// react router
// make a display for store items
// shopping cart context provider
// components: navbar and items

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
