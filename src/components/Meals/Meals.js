import { useState } from "react";

const meals = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    title: "Burger",
    description: "Juicy beef patty with cheese",
    price: 12.99,
  },
  {
    title: "Salad",
    description: "Fresh greens and dressing",
    price: 8.99,
  },
  {
    title: "Pizza",
    description: "Delicious Italian pizza",
    price: 15.99,
  },
  {
    title: "Pasta",
    description: "Homemade pasta with sauce",
    price: 10.99,
  },
];

export default function Meals({ setTotalUnit, onAddMeals }) {
  return (
    <div className="meals">
      {meals.map((meal) => (
        <Meal
          key={meal.title}
          meal={meal}
          onAddMeals={onAddMeals}
          setTotalUnit={setTotalUnit}
        />
      ))}
    </div>
  );
}

function Meal({ meal, onAddMeals }) {
  const [amount, setAmount] = useState(1);

  function handleSetAmount(e) {
    if (+e.target.value < 1) return setAmount("");

    setAmount(+e.target.value);
  }

  return (
    <div className="meal">
      <div className="description">
        <h2 className="meal-title">{meal.title}</h2>
        <p className="meal-description">{meal.description} </p>
        <p className="meal-price">${meal.price} </p>
      </div>
      <div className="purchase">
        <div className="amount">
          <label>Amount</label>
          <input onChange={handleSetAmount} value={amount} type="number" />
        </div>
        <button
          onClick={() => {
            onAddMeals(meal, amount);
          }}
          className="btn-add"
        >
          <i className="fa-solid fa-plus "></i> Add
        </button>
      </div>
    </div>
  );
}
