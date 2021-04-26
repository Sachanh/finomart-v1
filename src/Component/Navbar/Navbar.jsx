import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/cartContext";

export function Navbar() {
 
  const {wishlist,cart } = useCart();
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h3>FinoMart</h3>
      </NavLink>

      <div style={{ display: "flex", padding: "1rem" }}>
        <div className="cart-bg">
          <NavLink to="/wishlist">
            <i className="far fa-heart"></i>
          </NavLink>
          <span className="alert">{wishlist.length}</span>
        </div>
        <div className="cart-bg">
          <NavLink to="/cart">
            <i className="fas fa-shopping-bag"></i>
          </NavLink>
          <span className="alert">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
}
