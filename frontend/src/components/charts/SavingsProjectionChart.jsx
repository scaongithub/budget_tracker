import { useMemo } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppContext } from '../../context/AppContext.jsx';

export default function SavingsProjectionChart({ data }) {
  const { t, locale } = useAppContext();

  const localizedData = useMemo(
    () => data.map((entry) => ({ ...entry, month: t(`reports.months.${entry.month}`) })),
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
      <h3>{t('reports.charts.savingsTitle')}</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={localizedData}>
          <XAxis dataKey="month" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip formatter={(value) => [currencyFormatter.format(value), t('reports.charts.tooltipSavings')]} />
          <Line type="monotone" dataKey="savings" stroke="#C56A1A" strokeWidth={3} dot={{ r: 6, fill: '#1F3C88' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
