import { Link } from "react-router-dom";

export function GoToCartButton() {
  return (
    <>
      <Link to="/cart">
        <button className="bttn bttn-secondary"> Go to Cart</button>
      </Link>
    </>
  );
}
