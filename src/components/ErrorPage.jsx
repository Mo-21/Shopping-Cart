import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Oh no, this route does not exist!</h1>
      <Link style={{ color: "white" }} to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
