import { useState } from "react";

import Header from "./components/Layout/Header";
import Logo from "./components/UI/Logo";
import Cart from "./components/Cart/Cart";

import Message from "./components/UI/Message";
import Meals from "./components/Meals/Meals";

import Modal from "./components/UI/Modal";

export default function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header>
        <Logo />
        <Cart totalAmount={totalAmount} setIsModalOpen={setIsModalOpen} />
      </Header>
      <main>
        <Message />
        <Meals setTotalAmount={setTotalAmount} />
      </main>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
