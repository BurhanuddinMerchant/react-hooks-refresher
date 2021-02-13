import React from "react";
const Card = ({ refresher }) => {
  const handleInc = (e) => {
    refresher.setRefreshersTotalCount(refresher.refreshersTotalCount + 1);
    refresher.refreshers[refresher.name].cnt += 1;
    refresher.setRefreshers({ ...refresher.refreshers });
  };
  const handleDec = (e) => {
    if (refresher.refreshers[refresher.name].cnt === 0) {
      return;
    } else if (refresher.refreshers[refresher.name].cnt === 1) {
      let newCheckout = {};
      for (const i in refresher.checkoutList) {
        if (i === refresher.name) {
          continue;
        } else {
          newCheckout = { ...newCheckout, [i]: refresher.checkoutList[i] };
        }
      }
      refresher.setCheckoutList(newCheckout);
    }
    refresher.refreshers[refresher.name].cnt -= 1;
    refresher.setRefreshersTotalCount(refresher.refreshersTotalCount - 1);
    refresher.setRefreshers({ ...refresher.refreshers });
  };
  return (
    <div className="refresher-card">
      <img
        src="https://packreate.com/wp-content/uploads/2018/03/Aluminium_Can_Metallic_Matte_Front_Mockup_01.jpg"
        alt="refresher-mockup"
      />
      <h2>{refresher.name}</h2>
      <button
        className="btn"
        id="inc"
        onClick={handleInc}
        name={refresher.name}
      >
        +
      </button>
      <button
        className="btn"
        id="dec"
        onClick={handleDec}
        name={refresher.name}
      >
        -
      </button>
      <span className="count"> {refresher.cnt}</span>
    </div>
  );
};
export default Card;
