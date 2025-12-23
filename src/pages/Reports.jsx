import "../styles/reports.css";

<div className="reports">
  {Object.entries(categoryTotals).map(([cat, total]) => (
    <div key={cat} className="report-card">
      <strong>{cat}</strong> — ₹{total}
    </div>
  ))}
</div>
