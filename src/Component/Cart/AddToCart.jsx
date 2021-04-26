import { useCart } from "../../Context/cartContext";
import "./EmptyCart";
import { EmptyCart } from "./EmptyCart";
import {CartTotal} from "./CartTotal"

function ShowItemCart({ item }) {
  const {dispatch}=useCart();


  return (
    <>
     
      <div  key={item.id}  className="offer__card">
        <img src={item.image} alt={item.name} />
        <button onClick={()=>dispatch({
                type: "REMOVE_CART_ITEM",
                        payload: item
                      })} className="cart-alert"> <i className="fa fa-times"></i> </button>
        <div className="horizontal-card-desc">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button> + </button>
          {item.quantity}
          <button> - </button>
          <br/>
          <button> Buy Now </button>
        </div>
      </div>
    </>
  );
}

export function AddToCart() {
  const { cart } = useCart();

  return (
    <>
     {cart.length === 0 ? <EmptyCart /> :
      <div className="cart">
        <h1> Your Cart </h1>
         <CartTotal items={cart.length}/>
        {cart.map((cartItem) => (
        <ShowItemCart item={cartItem} />
        ))}
       
      </div>
     }
    </>
  );
}
