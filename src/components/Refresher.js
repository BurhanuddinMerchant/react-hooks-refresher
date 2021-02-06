import React, { useEffect, useState } from "react";
import RefresherCard from "./RefresherCard";
const Refresher = () => {
  const [refreshers, setRefreshers] = useState({});
  const [refreshersTotalCount, setRefreshersTotalCount] = useState(0);
  useEffect(() => {
    setRefreshers({
      RefresherRegular: { cnt: 0, id: 1, name: "RefresherRegular" },
      RefresherStrong: { cnt: 0, id: 2, name: "RefresherStrong" },
      RefresherUltra: { cnt: 0, id: 3, name: "RefresherUltra" },
      RefresherSpecial: { cnt: 0, id: 4, name: "RefresherSpecial" },
    });
  }, []);
  // const handleClick = () => {
  //   let count = 0;
  //   for (const r in refreshers) {
  //     count += refreshers[r].cnt;
  //   }
  //   setRefreshersTotalCount(count);
  // };
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
      </div>
    </>
  );
};
export default Refresher;
