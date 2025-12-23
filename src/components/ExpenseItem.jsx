import { useExpenses } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useExpenses();

  return (
    <li style={{ marginBottom: 10 }}>
      <strong>{expense.title}</strong> - ${expense.amount} ({expense.category})
      <button
        onClick={() => deleteExpense(expense.id)}
        style={{ marginLeft: 10 }}
      >
        Delete
      </button>
    </li>
  );
};

export default ExpenseItem;
