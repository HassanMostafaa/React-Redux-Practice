import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increamentCount, decreamentCount } from "../Redux/counter/action";
import "../Styles/counter.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

  return (
    <div className="container">
      <h1>Counter Component</h1>
      <div className="counter-area">
        <div className="counter-card">
          <p>
            Count:{" "}
            <span style={{ color: count >= 0 ? "green" : "red" }}>{count}</span>
          </p>
          <button onClick={() => dispatch(increamentCount())}>
            Increament +1
          </button>

          <button onClick={() => dispatch(decreamentCount())}>
            Decreament -1
          </button>
        </div>
      </div>
    </div>
  );
};
