import { useState } from "react";

import Header from "./components/Layout/Header";
import Logo from "./components/UI/Logo";
import Cart from "./components/Cart/Cart";

import Message from "./components/UI/Message";
import Meals from "./components/Meals/Meals";

import Modal from "./components/UI/Modal";

export default function App() {
  const [totalUnit, setTotalUnit] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderedMeals, setOrderedMeals] = useState([]);

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

  return (
    <>
      <Header>
        <Logo />
        <Cart totalUnit={totalUnit} setIsModalOpen={setIsModalOpen} />
      </Header>
      <main>
        <Message />
        <Meals setTotalUnit={setTotalUnit} onAddMeals={handleAddMeals} />
      </main>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        orderedMeals={orderedMeals}
      />
    </>
  );
}
