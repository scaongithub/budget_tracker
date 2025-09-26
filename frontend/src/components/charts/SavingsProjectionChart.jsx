import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function SavingsProjectionChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Savings Projection</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="month" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip formatter={(value) => [`€${value}`, 'Savings']} />
          <Line type="monotone" dataKey="savings" stroke="#C56A1A" strokeWidth={3} dot={{ r: 6, fill: '#1F3C88' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
