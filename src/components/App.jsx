import { Link } from "react-router-dom";
import "../styles/global.scss";
import FeaturedProducts from "./FeaturedProducts.jsx";

export function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li className="brand">Neon</li>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          Cart
        </Link>
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
        <FeaturedProducts />
      </div>
    </>
  );
}

export default App;
