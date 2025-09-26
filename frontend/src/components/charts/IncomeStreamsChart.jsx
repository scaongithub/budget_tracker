import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function IncomeStreamsChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Income Streams</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#2b2b2b' }} />
          <YAxis tick={{ fill: '#2b2b2b' }} />
          <Tooltip formatter={(value) => [`€${value}`, 'Amount']} />
          <Legend />
          <Bar dataKey="paola" stackId="a" fill="#E94256" name="Paola" />
          <Bar dataKey="carlo" stackId="a" fill="#1F3C88" name="Carlo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
