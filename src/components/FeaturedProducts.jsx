import ProductProfile from "./FetchProducts";
import "../styles/global.scss";

export default function FeaturedProducts() {
  const limit = 5;

  return (
    <div className="products-component">
      <h1>Featured Products</h1>
      <div className="products-group">
        <ProductProfile limit={limit} />
      </div>
    </div>
  );
}
