import { useRef, useState } from "react";

export default function Modal({ isModalOpen, setIsModalOpen }) {
  const modal = useRef(null);

  return (
    <>
      {isModalOpen && (
        <>
          <div className="modal" ref={modal}>
            <div className="purchased-meals">
              <div className="meal">
                <div className="description">
                  <h2 className="meal-title">Sushi</h2>
                  <span className="meal-price">$22.99 </span>
                  <span className="meal-unit">x 10 </span>
                </div>
                <div className="amount">
                  <button className="btn-dec">
                    <i className="fa-solid fa-minus "></i>
                  </button>
                  <button className="btn-inc">
                    <i className="fa-solid fa-plus "></i>
                  </button>
                </div>
              </div>
              <div className="meal">
                <div className="description">
                  <h2 className="meal-title">meal.title</h2>
                  <span className="meal-price">$meal.price </span>
                  <span className="meal-unit">meal.unit </span>
                </div>
                <div className="amount">
                  <button>
                    <i className="fa-solid fa-minus "></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-plus "></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="total">
              <h2>Total amount</h2>
              <p className="total-amount">$229.9</p>
            </div>
            <div className="btns-cta">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn-close"
              >
                Close
              </button>
              <button className="btn-order">Order</button>
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
