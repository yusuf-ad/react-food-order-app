import { useState, useEffect } from "react";

import Header from "./components/Layout/Header";
import Logo from "./components/UI/Logo";
import Cart from "./components/Cart/Cart";

import Message from "./components/UI/Message";
import Meals from "./components/Meals/Meals";

import Modal from "./components/UI/Modal";

export default function App() {
  const [orderedMeals, setOrderedMeals] = useState(function () {
    const storedOrder = localStorage.getItem("orderedMeals");
    return storedOrder ? JSON.parse(storedOrder) : [];
  });

  const [totalUnit, setTotalUnit] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(
    function () {
      const total = orderedMeals.reduce((accumulator, meal) => {
        return accumulator + +meal.amount;
      }, 0);
      // updating state is asynchronous
      setTotalUnit(total);
    },
    [orderedMeals]
  );

  useEffect(
    function () {
      localStorage.setItem("orderedMeals", JSON.stringify(orderedMeals));
    },
    [orderedMeals]
  );

  function handleAddMeals(meal, amount) {
    // Check if a meal with the same name already exists in orderedMeals
    const existingMealIndex = orderedMeals.findIndex(
      (existingMeal) => existingMeal.title === meal.title
    );

    if (existingMealIndex !== -1) {
      // If the meal already exists, update its amount
      const updatedOrderedMeals = [...orderedMeals];
      updatedOrderedMeals[existingMealIndex].amount += amount;
      setOrderedMeals(updatedOrderedMeals);
    } else {
      // If the meal doesn't exist, add it to the orderedMeals array
      const newMeal = {
        title: meal.title,
        price: meal.price,
        amount,
      };
      setOrderedMeals([...orderedMeals, newMeal]);
    }
  }

  function incrementMealAmount(mealTitle) {
    const updatedMeals = orderedMeals.map((meal) => {
      if (meal.title === mealTitle) {
        return { ...meal, amount: meal.amount + 1 };
      }
      return meal;
    });
    setOrderedMeals(updatedMeals);
  }

  function decrementMealAmount(mealTitle) {
    const updatedMeals = orderedMeals.map((meal) => {
      if (meal.title === mealTitle && meal.amount > 0) {
        return { ...meal, amount: meal.amount - 1 };
      }
      return meal;
    });
    setOrderedMeals(updatedMeals.filter((meal) => meal.amount > 0));
  }

  return (
    <>
      <Header>
        <Logo />
        <Cart totalUnit={totalUnit} setIsModalOpen={setIsModalOpen} />
      </Header>
      <main>
        <Message />
        <Meals onAddMeals={handleAddMeals} />
      </main>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        orderedMeals={orderedMeals}
        setOrderedMeals={setOrderedMeals}
        incrementMealAmount={incrementMealAmount}
        decrementMealAmount={decrementMealAmount}
      />
    </>
  );
}
