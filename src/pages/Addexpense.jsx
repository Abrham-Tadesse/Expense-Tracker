import ExpenseForm from "../components/ExpenseForm";

const AddExpense = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2 className="add">Add Expense</h2>
      <ExpenseForm />
    </div>
  );
};

export default AddExpense;
