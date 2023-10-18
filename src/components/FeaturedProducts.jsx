import "../styles/global.scss";
import { useEffect, useState } from "react";

const useFetchingFeaturedProducts = () => {
  const [productURL, setProductURL] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5",
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

export default function FeaturedProducts() {
  const { productURL, error, loading } = useFetchingFeaturedProducts();

  if (error)
    return <h2 style={{ color: "white" }}>A network error was encountered</h2>;
  if (loading)
    return (
      <>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Featured Products
        </h1>
        <h2 style={{ color: "white", textAlign: "center" }}>LOADING...</h2>
      </>
    );

  return (
    <div className="products-component">
      <h1>Featured Products</h1>
      <div className="products-group">
        {productURL.map((product) => (
          <div className="product" key={product.title}>
            <div className="title">{product.title}</div>
            <img className="product-image" src={product.image}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
