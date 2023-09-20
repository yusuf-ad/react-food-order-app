export default function Cart({ totalUnit, setIsModalOpen }) {
  return (
    <button onClick={() => setIsModalOpen(true)} className="cart">
      <i className="fa-solid fa-cart-shopping cart-icon"></i> Your Cart
      <span className="unit">{totalUnit}</span>
    </button>
  );
}
