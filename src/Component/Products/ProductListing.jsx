import "./productlisting.css";
import { useCart } from "../../Context/cartContext";
import { itemMatch } from "../utils/ItemMatch";
import ProductShorting from "./ProductShorting";
import ProductFilter from "./ProductFilter";
import {useFilters} from "../FilterDataHook/filterdata";
import { GoToCartButton } from "../utils/addToCartButton";

export function ProductListing() {
  const {cart, wishlist, dispatch } = useCart();
  const {filteredData} =useFilters();
  return (
    <div className="main">
      
      <div className="card-outer-div">
      <ProductShorting />
      <ProductFilter />
        {filteredData.map((item) => (
          <div key={item.id} className="offer__card">
            <img src={item.image} max-width="100%" alt={item.productName} />
            <h3> {item.name} </h3>
            <div>Rs. {item.price}</div>
            {item.inStock && <div> In Stock </div>}
            {!item.inStock && <div> Out of Stock </div>}
            <div>{item.level}</div>
            {item.fastDelivery ? (
              <div> Fast Delivery </div>
            ) : (
              <div> 3 days minimum </div>
            )}
            <div className="btn">
             {itemMatch(cart, item.id)?<GoToCartButton/> :
              <button
                disabled={item.inStock ? "" : "true"}
                onClick={() =>  dispatch({ type: "ADD_TO_CART", payload: item })}
              >
              Add To cart
              </button>
             }
             <button
                onClick={() =>
                  itemMatch(wishlist, item.id)
                    ? dispatch({
                        type: "REMOVE_WISHLIST_ITEM",
                        payload: item
                      })
                    : dispatch({ type: "ADD_TO_WISHLIST", payload: item })
                }
              >
                {" "}
                <i className="far fa-heart"></i>{" "}
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
