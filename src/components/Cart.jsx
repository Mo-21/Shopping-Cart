import { Navbar } from "./App";
import "../styles/global.scss";
import { useState, useEffect } from "react";

export class AddToCart {
  static itemsToCheck = [];
  constructor(title, quantity, price) {
    (this.title = title), (this.quantity = quantity), (this.price = price);
    AddToCart.itemsToCheck.push({ title, quantity, price });
    console.log(AddToCart.itemsToCheck);
  }
}

export default function Cart() {
  const [itemsInCart, setItemsInCart] = useState(AddToCart.itemsToCheck);

  let total = 0;
  AddToCart.itemsToCheck.map(
    (item) => (total = total + item.price * item.quantity)
  );

  console.log(total);

  useEffect(() => {
    setItemsInCart([...AddToCart.itemsToCheck]);
  }, [AddToCart.itemsToCheck]);

  const removeItem = (index) => {
    const newItems = [...itemsInCart];
    newItems.splice(index, 1);
    AddToCart.itemsToCheck.splice(index, 1);
    setItemsInCart(newItems);
  };

  console.log(itemsInCart);

  return (
    <>
      <Navbar />
      <div className="container-cart">
        <div style={{ color: "white" }} className="cart-group">
          {itemsInCart.map((item, index) => (
            <div className="theItemItSelf" key={index}>
              <div className="item">Item: {item.title}</div>
              <div style={{ fontStyle: "italic" }}>
                Quantity: {item.quantity}
              </div>
              <div style={{ fontStyle: "italic" }}>
                Price for one: {item.price}$
              </div>
              <div className="price">
                Price:
                {item.quantity > 1 ? item.price * item.quantity : item.price}$
              </div>
              <button
                data-key={index}
                className="remove-item"
                onClick={() => removeItem(index)}
              >
                Remove Item
              </button>
            </div>
          ))}
        </div>
        <div className="check-out">
          <div className="second-cont">
            <div className="total">Total: {total}$</div>
            <button className="proceed">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
