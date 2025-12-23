import { useMemo } from "react";
import { useExpenses } from "../context/ExpenseContext";
import "../styles/reports.css";

const Reports = function() {
  const {expenses} = useExpenses();

  // Calculate total amount per category
  const categoryTotals = useMemo(() => {
    if (!expenses || expenses.length === 0) return {};

    return expenses.reduce((acc, expense) => {
      const category = expense.category;
      const amount = Number(expense.amount);

      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {});
  }, [expenses]);

  return (
    <div className="reports">
      <h2>Reports</h2>

      {Object.keys(categoryTotals).length === 0 ? (
        <p>No expense data available.</p>
      ) : (
        Object.entries(categoryTotals).map(([category, total]) => (
          <div key={category} className="report-card">
            <strong>{category}</strong>
            <span>  Birr {total}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Reports;


export const Test = function(){


    return (<>
    <h2>here is the test for the project</h2>
    </>)
}

