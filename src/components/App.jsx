import { useState } from "react";
import "../styles/global.scss";
import Products from "./Products.jsx";

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li className="brand">Neon</li>
        <li>Home</li>
        <li>Products</li>
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <section className="intro-section">
          <div className="wrapper">
            <div className="intro-header">Your Dream Store is Here</div>
            <div>Shop Now!</div>
          </div>
        </section>
        <Products></Products>
      </div>
    </>
  );
}

export default App;
