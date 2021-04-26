export function CartTotal({items, total}){
return(
  <>
  <div> 
  <h3> Cart Total </h3>
  <span> Number of items in Cart:  {items} </span>
  <br/>
  <span> Delvery Charges : free </span>
  <br/>
  <span> Total cart value : {total} </span>
  </div>
  </>
)
}