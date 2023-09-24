"use client";
import React, { useState, createContext } from "react";

const MealsContext = createContext();

const todaysMeals = [
  { id: 1, name: "Baked Beans" },
  { id: 2, name: "Baked Sweet Potatoes" },
  { id: 3, name: "Baked Potatoes" },
];

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);
  const [count, setCount] = useState(3);

  const tickMeal = (v) => {
    setCount((prev) => {
      return v ? prev - 1 : prev + 1;
    });
  };

  return (
    <React.Fragment>
      <MealsContext.Provider
        value={{ mealList: meals, tickMeal: tickMeal, count: count }}
      >
        {children}
      </MealsContext.Provider>
    </React.Fragment>
  );
};

// export default MealsProvider;
export { MealsProvider, MealsContext };
