import React, { useEffect, useState } from "react";
import RefresherCard from "./RefresherCard";
import data from "../data/refreshers";
const Refresher = () => {
  const [refreshers, setRefreshers] = useState({});
  const [checkoutList, setCheckoutList] = useState({});
  const [refreshersTotalCount, setRefreshersTotalCount] = useState(0);
  useEffect(() => {
    setRefreshers({ ...data });
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
  useEffect(() => {
    console.log(checkoutList);
  }, [checkoutList]);
  return (
    <>
      <h1>Refresher</h1>
      <div>
        <p>Welcome to Refresher </p>
        <div id="total-count">
          <span className="count">Total Count : {refreshersTotalCount}</span>
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
                }}
                key={r}
              />
            );
          })}
        </div>
        <button onClick={checkout}>checkout</button>
      </div>
    </>
  );
};
export default Refresher;
