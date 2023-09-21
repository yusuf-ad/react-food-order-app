import { useEffect, useRef, useState } from "react";

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  orderedMeals,
  setOrderedMeals,
  incrementMealAmount,
  decrementMealAmount,
}) {
  const [totalAmount, setTotalAmount] = useState(0);
  const modal = useRef(null);

  useEffect(
    function () {
      const total = orderedMeals.reduce((accumulator, meal) => {
        return accumulator + +meal.amount * meal.price;
      }, 0);
      // updating state is asynchronous
      setTotalAmount(total);
    },
    [orderedMeals]
  );

  function handleOrder() {
    setOrderedMeals([]);
    alert("Succesfully ordered");
    setIsModalOpen(false);
  }

  return (
    <>
      {isModalOpen && (
        <>
          <div className="modal" ref={modal}>
            {orderedMeals.length ? (
              <div className="ordered-meals">
                {orderedMeals.map((meal) => (
                  <OrderedMeal
                    key={meal.title}
                    meal={meal}
                    setTotalAmount={setTotalAmount}
                    incrementMealAmount={incrementMealAmount}
                    decrementMealAmount={decrementMealAmount}
                  />
                ))}
              </div>
            ) : (
              <p className="order-cta">
                Let's get order some delicious food 😂
              </p>
            )}
            <div className="total">
              <h2>Total amount</h2>
              <p className="total-amount">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="btns-cta">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-close"
              >
                Close
              </button>
              {orderedMeals.length > 0 && (
                <button onClick={handleOrder} className="btn-order">
                  Order
                </button>
              )}
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className="modal-overlay"
          ></div>
        </>
      )}
    </>
  );
}

function OrderedMeal({ meal, incrementMealAmount, decrementMealAmount }) {
  return (
    <div className="meal">
      <div className="description">
        <h2 className="meal-title">{meal.title}</h2>
        <span className="meal-price">${meal.price} </span>
        <span className="meal-unit">x {meal.amount} </span>
      </div>
      <div className="amount">
        <button
          onClick={() => decrementMealAmount(meal.title)}
          className="btn-dec"
        >
          <i className="fa-solid fa-minus "></i>
        </button>
        <button
          onClick={() => incrementMealAmount(meal.title)}
          className="btn-inc"
        >
          <i className="fa-solid fa-plus "></i>
        </button>
      </div>
    </div>
  );
}
