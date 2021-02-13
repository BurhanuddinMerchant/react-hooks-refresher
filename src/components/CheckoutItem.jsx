import { React } from "react";

const CheckoutItem = ({ checkoutListItem, handleRemove }) => {
  return (
    <div
      className="checkout-item"
      key={checkoutListItem.id}
      id={checkoutListItem.id}
    >
      <span>
        <img src={checkoutListItem.image} alt="refresher-checkout"></img>
      </span>
      <span>
        {checkoutListItem.name} : {checkoutListItem.cnt}
      </span>
      <button className="remove" onClick={handleRemove}>
        x
      </button>
    </div>
  );
};
export default CheckoutItem;
