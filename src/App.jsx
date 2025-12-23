import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import AddExpense from "./pages/Addexpense";
import Reports from "./pages/Reports";
import { ExpenseProvider } from "./context/ExpenseContext";
import Test from "./pages/Reports";
import "./styles/navbar.css";


const App = () => {
  return (
    <>
<Test />


    <BrowserRouter >
        <ExpenseProvider>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }} className="navbar">
        <NavLink to="/" style={{ marginRight: 10 }}>Dashboard</NavLink>
        <NavLink to="/add" style={{ marginRight: 10 }}>Add Expense</NavLink>
        <NavLink to="/reports">Reports</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
          </ExpenseProvider>
      </BrowserRouter>

      
    </>
  );
};

export default App;
