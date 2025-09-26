import { useMemo } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useAppContext } from '../../context/AppContext.jsx';

export default function StackedBar({ data }) {
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
      <h3>{t('reports.charts.stackedTitle')}</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={localizedData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#333' }} />
          <YAxis tick={{ fill: '#333' }} />
          <Tooltip formatter={(value) => [currencyFormatter.format(value), t('reports.charts.tooltipAmount')]} />
          <Bar dataKey="paola" stackId="a" fill="#F7B538" name="Paola" />
          <Bar dataKey="carlo" stackId="a" fill="#6C7A4C" name="Carlo" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
