import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const patternFill = (
  <pattern id="talavera" patternUnits="userSpaceOnUse" width="8" height="8">
    <rect width="8" height="8" fill="rgba(255,255,255,0.15)" />
    <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.3)" />
    <circle cx="6" cy="6" r="1" fill="rgba(255,255,255,0.3)" />
  </pattern>
);

export default function ExpenseDonut({ data }) {
  return (
    <div className="chart-card">
      <svg width="0" height="0">
        <defs>{patternFill}</defs>
      </svg>
      <h3>Expense Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} stroke="none" />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`€${value}`, name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        {data.map((entry) => (
          <span key={entry.name}>
            <span className="legend-dot" style={{ backgroundColor: entry.fill }} />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}
