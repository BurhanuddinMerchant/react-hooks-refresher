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
    }
    refresher.refreshers[refresher.name].cnt -= 1;
    refresher.setRefreshersTotalCount(refresher.refreshersTotalCount - 1);
    refresher.setRefreshers({ ...refresher.refreshers });
  };
  return (
    <div className="refresher-card">
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
