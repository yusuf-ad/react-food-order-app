export default function Cart({ totalAmount, setIsModalOpen }) {
  return (
    <button onClick={() => setIsModalOpen(true)} className="cart">
      <i className="fa-solid fa-cart-shopping cart-icon"></i> Your Cart
      <span className="unit">{totalAmount}</span>
    </button>
  );
}
