import "../styles/global.scss";
import { useEffect, useState } from "react";

const useFetchingProducts = () => {
  const [productURL, setProductURL] = useState({
    title: "",
    price: "",
    imageURL: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery",
          {
            mode: "cors",
          }
        );
        if (response.status >= 400) {
          throw new Error("Server Error: This Is Not A Training!");
        }
        const actualData = await response.json();
        setProductURL({
          ...productURL,
          title: actualData[0].title,
          imageURL: actualData[0].image,
        });
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

  if (error) return <h2>A network error was encountered</h2>;
  if (loading) return <h2>LOADING...</h2>;

  return (
    <>
      <h5>HELLO FROM PRODUCTS</h5>
      <div className="products-group">
        <div className="product-1">
          <div className="title">{productURL.title}</div>
          <img className="product-image" src={productURL.imageURL}></img>
        </div>
      </div>
    </>
  );
}
