import { Navbar } from "./App";
import "../styles/global.scss";
import { useEffect, useState } from "react";

const useFetchingProducts = () => {
  const [productURL, setProductURL] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=20",
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
            item.title.length < 10
              ? item.title
              : item.title.slice(0, 10) + "...",
          image: item.image,
          price: item.price + " " + "USD",
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
};

export default function Products() {
  const { productURL, error, loading } = useFetchingProducts();

  if (error)
    return <h2 style={{ color: "white" }}>A network error was encountered</h2>;
  if (loading)
    return <h2 style={{ color: "white", textAlign: "center" }}>LOADING...</h2>;

  return (
    <>
      <Navbar></Navbar>
      <div className="product-page">
        {productURL.map((product) => (
          <div className="product" key={product.title}>
            <div className="title">{product.title}</div>
            <img className="product-image" src={product.image}></img>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}
