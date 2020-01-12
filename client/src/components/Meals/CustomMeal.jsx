import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./CustomMeal.css";

const CustomMeal = ({ savedMeals }) => {
  let mealData = savedMeals
  const [addMealClicked, setAddMeal] = useState(false);
  const [mealOfDay, setMealOfDay] = useState("No Meal Plan:");
  const [mealDescription, setMealDescription] = useState("Add Meal Plan:");
  const getData = arg => {
    if (arg!==undefined) {
      let num = Math.floor(Math.random() * arg.length);

      let todayMeal = arg[num].name || "front end messed up";

      setMealDescription(todayMeal);
      setMealOfDay("Today's Meal:");
    }
  };
  useEffect(() => {
    getData(mealData);
  }, [mealData]);




  if (addMealClicked) {
    return <Redirect to="/ListMealPlan" />;
  }

  return (
    <div className="user-meal-tile">
      <div className="meal-day">{mealOfDay}</div>
      <div
        className="meal-description"
        onClick={() => {
          setAddMeal(true);
        }}
      >
        {mealDescription}
      </div>
    </div>
  );
};

export default CustomMeal;
