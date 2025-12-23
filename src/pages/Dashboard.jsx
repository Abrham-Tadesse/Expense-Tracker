import { useExpenses } from "../context/ExpenseContext";
import ExpenseList from "../components/ExpenseList";
import Filters from "../components/Filters";
import { useMemo, useState } from "react";
import "../styles/dashboard.css";


const Dashboard = function() {
  const { expenses } = useExpenses();
  const [category, setCategory] = useState("All");

  const filteredExpenses = useMemo(() => {
    if (category === "All") return expenses;
    return expenses.filter((e) => e.category === category);
  }, [expenses, category]);

  const totalAmount = useMemo(() => {
    return filteredExpenses.reduce((sum, e) => sum + Number(e.amount), 0);
  }, [filteredExpenses]);

  return (
    <div style={{ padding: 20 }} className="dashboard">
     <div className="summary">
      <Filters category={category} setCategory={setCategory} />

      <h3>Total: {totalAmount}</h3>

      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <ExpenseList expenses={filteredExpenses} />
      )}
      </div>
    </div>
  );
};

export default Dashboard;
