import { Navbar } from "./App";
import "../styles/global.scss";
import { useState } from "react";

export class AddToCart {
  static itemsToCheck = [{ title: "Hello", quantity: 2 }];
  constructor(title, quantity, price) {
    (this.title = title), (this.quantity = quantity), (this.price = price);
    AddToCart.itemsToCheck.push({ title, quantity });
  }

  static removeItem(title) {}
}

export default function Cart() {
  return (
    <>
      <Navbar />
      <div style={{ color: "white" }} className="cart-group">
        {AddToCart.itemsToCheck.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            <button
              data-key={index}
              className="remove-item"
              onClick={() => AddToCart.removeItem(item.title)}
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
