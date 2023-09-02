import React from "react";
import { useDispatch } from "react-redux";
import {
  increment1,
  decrement1,
  increment2,
  decrement2,
  change1,
  change2,
} from "../redux/features/counter";
const B = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment1());
        }}
      >
        Increment 1
      </button>
      <button
        onClick={() => {
          dispatch(increment2());
        }}
      >
        Increment 2
      </button>
      <button
        onClick={() => {
          dispatch(decrement1());
        }}
      >
        Decrement 1
      </button>
      <button
        onClick={() => {
          dispatch(decrement2());
        }}
      >
        Decrement 2
      </button>
      <button
        onClick={() => {
          dispatch(change1(56));
        }}
      >
        change 1
      </button>
      <button
        onClick={() => {
          dispatch(change2(234));
        }}
      >
        change 2
      </button>
    </div>
  );
};

export default B;
