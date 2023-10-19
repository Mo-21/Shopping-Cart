import { Navbar } from "./App";
import "../styles/global.scss";
import ProductProfile from "./FetchProducts";

export default function Products() {
  const limit = 20;

  return (
    <>
      <Navbar></Navbar>
      <div className="product-page">
        <ProductProfile limit={limit} />
      </div>
    </>
  );
}
