"use client";
import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";
const Counter = () => {
  const { count } = useContext(MealsContext);
  return (
    <div>
      <h3>Meals Remaining: {count}</h3>
    </div>
  );
};

export default Counter;
