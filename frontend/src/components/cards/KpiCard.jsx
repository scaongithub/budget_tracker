export default function KpiCard({ label, value, change, tone }) {
  return (
    <article className={`kpi-card ${tone}`}>
      <h3>{label}</h3>
      <p className="kpi-value">{value}</p>
      <span className="kpi-change">{change}</span>
    </article>
  );
}
