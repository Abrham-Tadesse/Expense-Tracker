import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const submitHandler = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      title,
      amount,
      category,
    });

    navigate("/");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />

      <input
        type="number"
        placeholder="Amount (birr)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <br /><br />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
      <br /><br />

      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
