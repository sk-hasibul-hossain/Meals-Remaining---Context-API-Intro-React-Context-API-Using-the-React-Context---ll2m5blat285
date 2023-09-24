"use client";
import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";
const MealsList = () => {
  const { mealList, tickMeal } = useContext(MealsContext);
  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {mealList.map((meals) => {
          return (
            <li key={meals.id}>
              <input
                id={meals.id}
                type="checkbox"
                onChange={(event) => {
                  tickMeal(event.target.checked);
                }}
              />
              {meals.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MealsList;
