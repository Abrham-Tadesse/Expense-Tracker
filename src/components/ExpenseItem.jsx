import { useExpenses } from "../context/ExpenseContext";
import "../styles/expense.css";


const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useExpenses();

  return (
    <li style={{ marginBottom: 10 }} className="expense-item">
      <div>
      <strong>{expense.title}</strong> <br /> <span>- ${expense.amount} ({expense.category})</span>
      </div>
      <button className="delete-btn"
        onClick={() => deleteExpense(expense.id)}
        style={{ marginLeft: 10 }}
      >
        Delete
      </button>
    </li>
  );
};

export default ExpenseItem;
