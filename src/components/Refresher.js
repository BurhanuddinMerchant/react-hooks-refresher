import React, { useEffect, useState } from "react";
import RefresherCard from "./RefresherCard";
import data from "../data/refreshers";
const Refresher = () => {
  const [refreshers, setRefreshers] = useState({});
  const [checkoutList, setCheckoutList] = useState({});
  const [refreshersTotalCount, setRefreshersTotalCount] = useState(0);
  useEffect(() => {
    setRefreshers({ ...data });
    document.getElementById("checkout-container").style.display = "none";
  }, []);
  const checkout = (e) => {
    let checkoutListCopy = {};
    for (const i in refreshers) {
      if (refreshers[i].cnt !== 0) {
        checkoutListCopy = { ...checkoutListCopy, [i]: refreshers[i] };
      }
    }
    setCheckoutList(checkoutListCopy);
  };
  const handleRemove = (e) => {
    const id = e.target.parentElement.attributes["id"].value;
    let newCheckout = {};
    for (const i in checkoutList) {
      if (checkoutList[i].id === parseInt(id)) {
        setRefreshersTotalCount(refreshersTotalCount - checkoutList[i].cnt);
        refreshers[i].cnt = 0;
      } else {
        newCheckout = { ...newCheckout, [i]: checkoutList[i] };
      }
    }
    setRefreshers(refreshers);
    setCheckoutList(newCheckout);
  };
  useEffect(() => {
    document.getElementById("checkout-container").style.display = "flex";
    document.getElementById("checkout-container").style.flexDirection =
      "column";
  }, [checkoutList]);
  return (
    <>
      <div className="container">
        <h1>Refresher</h1>

        <div id="total-count">
          <div className="count">Total Count : {refreshersTotalCount}</div>
        </div>
        <div className="refreshers">
          {Object.keys(refreshers).map((r) => {
            return (
              <RefresherCard
                refresher={{
                  ...refreshers[r],
                  setRefreshers,
                  refreshers,
                  setRefreshersTotalCount,
                  refreshersTotalCount,
                  setCheckoutList,
                  checkoutList,
                }}
                key={r}
              />
            );
          })}
        </div>
        <button className="btn" id="checkout" onClick={checkout}>
          Checkout
        </button>
      </div>
      <div id="checkout-container">
        <h2>Checkout Cart</h2>
        {Object.keys(checkoutList).map((m) => {
          // console.log(checkoutList[m]);
          return (
            <div
              className="checkout-item"
              key={checkoutList[m].id}
              id={checkoutList[m].id}
            >
              <span>
                <img
                  src="https://packreate.com/wp-content/uploads/2018/03/Aluminium_Can_Metallic_Matte_Front_Mockup_01.jpg"
                  alt="refresher-checkout"
                ></img>
              </span>
              <span>
                {checkoutList[m].name} : {checkoutList[m].cnt}
              </span>
              <button className="remove" onClick={handleRemove}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Refresher;
