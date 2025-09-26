import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppContext } from '../../context/AppContext.jsx';

export default function IncomeStreamsChart({ data }) {
  const { t, locale } = useAppContext();

  const localizedData = useMemo(
    () => data.map((entry) => ({ ...entry, name: t(`dashboard.incomeStreams.${entry.id}`) })),
    [data, t]
  );

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }),
    [locale]
  );

  return (
    <div className="chart-card">
      <h3>{t('dashboard.charts.incomeStreams')}</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={localizedData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#2b2b2b' }} />
          <YAxis tick={{ fill: '#2b2b2b' }} />
          <Tooltip formatter={(value) => [currencyFormatter.format(value), t('dashboard.charts.tooltipAmount')]} />
          <Legend />
          <Bar dataKey="paola" stackId="a" fill="#E94256" name="Paola" />
          <Bar dataKey="carlo" stackId="a" fill="#1F3C88" name="Carlo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
