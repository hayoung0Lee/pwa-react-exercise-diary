import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EachWeekStyle = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 50px;
  margin-top: 20px;
`;

//TODO:
// make add new week feature
// when click
function Home() {
  const [storeSize, setStoreSize] = useState(0);
  const [bounds, setBounds] = useState(null);
  const [daily, setDaily] = useState([]);
  const display = 20;

  const getWeeks = () => {
    let request = window.indexedDB.open("WorkoutDatabase", 1);
    request.onsuccess = function (e) {
      const db = request.result; // db is already global;
      const tx = db.transaction(["WorkoutStore"], "readonly");
      const store = tx.objectStore("WorkoutStore");
      const count = store.count();

      count.onsuccess = function () {
        const lowerb = count.result - display * 7;
        const upperb = count.result;
        const keyRangeValue = IDBKeyRange.bound(lowerb, upperb);
        const daily = store.getAll(keyRangeValue);
        setStoreSize(count.result);
        setBounds([lowerb, upperb]);
        daily.onsuccess = function () {
          setDaily(daily.result);
        };
      };

      db.onerror = function (e) {
        console.error("Error", e.target.erroCode);
      };

      tx.oncomplete = function () {
        db.close();
      };
    };
  };

  useEffect(() => {
    getWeeks();
  }, []);

  return (
    <div>
      <button>add new week</button>
      {daily.length > 0 ? (
        <div>
          {Array(parseInt(daily.length / 7))
            .fill(0)
            .map((a, index) => {
              const rIndex = parseInt(daily.length / 7) - index - 1;
              return (
                <EachWeekStyle
                  key={index}
                  onClick={() =>
                    console.log(daily.slice(rIndex * 7, rIndex * 7 + 7))
                  }
                >
                  <div>week: {daily[rIndex * 7].weekCount}</div>
                  <div>월요일: {daily[rIndex * 7].monDate}</div>
                </EachWeekStyle>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
