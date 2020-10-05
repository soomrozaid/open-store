import React from "react";
import "./App.css";

import data from './data'

function App() {
  function openMenu() {
    document.querySelector(".sidebar").classList.add("open");
  }

  function closeMenu() {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Open Store</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Shirts</a>
          </li>
          <li>
            <a href="index.html">Pants</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {data.products.map((product) => (
              <li key={product.id}>
                <div className="product">
                  <img src={product.image} alt="product" srcset="" />
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                  <div className="product-label">{product.label}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">
                    {product.rating} stars ({product.numReviews} reviews)
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
