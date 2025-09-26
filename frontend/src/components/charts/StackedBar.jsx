import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function StackedBar({ data }) {
  return (
    <div className="chart-card">
      <h3>Culture Stacked Spend</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip formatter={(value) => [`€${value}`, 'Amount']} />
          <Bar dataKey="paola" stackId="a" fill="#F7B538" name="Paola" />
          <Bar dataKey="carlo" stackId="a" fill="#6C7A4C" name="Carlo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
