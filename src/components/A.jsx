import React from "react";
import { useSelector } from "react-redux";

const A = () => {
  const { count1, count2 } = useSelector((state) => state.counter);
  return (
    <div>
      <div>count 1: {count1}</div>
      <div>count 2: {count2}</div>
    </div>
  );
};

export default A;
