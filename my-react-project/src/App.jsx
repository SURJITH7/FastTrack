import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Watches from "./pages/Watches";
import Contact from "./pages/Contact";

import "./App.css";
import { useState } from "react";
import CartPage from "./pages/CartPage";
import WishList  from "./pages/WishList";

function App() {

  return (

    <>

    {/* <h1> { count}</h1>
    <button onClick={()=>inc()}> Increment </button> */}

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/watches"
          element={<Watches />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        /> 
        <Route 
        path="/Cart"
        element={<CartPage/>}
        />
        <Route 
        path="/wishlist"
        element={<WishList/>}
        />

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;