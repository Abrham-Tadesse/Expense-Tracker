const Filters = ({ category, setCategory }) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <label>Filter by category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
        <option>Other</option>
      </select>
    </div>
  );
};

export default Filters;
