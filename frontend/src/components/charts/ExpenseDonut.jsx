import { useMemo } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useAppContext } from '../../context/AppContext.jsx';

const patternFill = (
  <pattern id="talavera" patternUnits="userSpaceOnUse" width="8" height="8">
    <rect width="8" height="8" fill="rgba(255,255,255,0.15)" />
    <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.3)" />
    <circle cx="6" cy="6" r="1" fill="rgba(255,255,255,0.3)" />
  </pattern>
);

export default function ExpenseDonut({ data }) {
  const { t, locale } = useAppContext();

  const localizedData = useMemo(
    () => data.map((entry) => ({ ...entry, name: t(`dashboard.expenseBreakdown.${entry.id}`) })),
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
      <svg width="0" height="0">
        <defs>{patternFill}</defs>
      </svg>
      <h3>{t('dashboard.charts.expenseBreakdown')}</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={localizedData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
          >
            {localizedData.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} stroke="none" />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [currencyFormatter.format(value), name]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        {localizedData.map((entry) => (
          <span key={entry.name}>
            <span className="legend-dot" style={{ backgroundColor: entry.fill }} />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}
