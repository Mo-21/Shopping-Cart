import "../styles/global.scss";
import { useEffect, useState } from "react";
import { AddToCart } from "./Cart";
import PropTypes from "prop-types";

export function useFetchingProducts(limit) {
  const [productURL, setProductURL] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${limit}`,
          {
            mode: "cors",
          }
        );
        if (response.status >= 400) {
          throw new Error("Server Error: This Is Not A Training!");
        }
        const actualData = await response.json();
        const products = actualData.map((item) => ({
          title:
            item.title.length < 20
              ? item.title
              : item.title.slice(0, 20) + "...",
          image: item.image,
          price: item.price,
        }));
        setProductURL(products);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { productURL, error, loading };
}

export default function ProductProfile({ limit }) {
  const { productURL, error, loading } = useFetchingProducts(limit);
  const [quantities, setQuantities] = useState(Array(limit).fill(1));

  const handleAddClick = (event) => {
    const itemTitle = event.target.getAttribute("data-title");
    const itemQuantity = event.target.getAttribute("data-quant");
    const itemPrice = event.target.getAttribute("data-price");
    const item = new AddToCart(itemTitle, itemQuantity, itemPrice);
    console.log(item);
  };

  if (error)
    return <h2 style={{ color: "white" }}>A network error was encountered</h2>;
  if (loading)
    return <h1 style={{ color: "white", textAlign: "center" }}>LOADING...</h1>;

  return (
    <>
      {productURL.map((product, index) => (
        <div className="product" key={product.title}>
          <div className="title">{product.title}</div>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div style={{ textAlign: "right" }} className="price">
            Price {product.price}$
          </div>
          <div className="input-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              min={1}
              id="quantity"
              type="number"
              value={quantities[index]}
              onChange={(e) => {
                const newQuantities = [...quantities];
                newQuantities[index] = parseInt(e.target.value, 10);
                setQuantities(newQuantities);
              }}
            />
          </div>
          <button
            data-title={product.title}
            data-quant={quantities[index]}
            data-price={product.price}
            onClick={handleAddClick}
            className="add"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}

ProductProfile.propTypes = {
  limit: PropTypes.number,
};
