import { useMemo, useState } from 'react';
import KpiCard from '../components/cards/KpiCard.jsx';
import CulturalSpotlight from '../components/cards/CulturalSpotlight.jsx';
import QuickAddCard from '../components/cards/QuickAddCard.jsx';
import TimelineCard from '../components/cards/TimelineCard.jsx';
import ExpenseDonut from '../components/charts/ExpenseDonut.jsx';
import IncomeStreamsChart from '../components/charts/IncomeStreamsChart.jsx';
import { expenseBreakdown, incomeStreams, kpis, spotlightItems, transactions } from '../data/dashboard.js';
import { useAppContext } from '../context/AppContext.jsx';

export default function DashboardPage() {
  const { t, locale } = useAppContext();
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const spotlight = useMemo(() => spotlightItems[spotlightIndex], [spotlightIndex]);

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

  const localizedKpis = useMemo(
    () =>
      kpis.map((item) => ({
        ...item,
        label: t(`dashboard.kpis.${item.id}.label`),
        change: t(`dashboard.kpis.${item.id}.change`),
        value: currencyFormatter.format(item.value)
      })),
    [currencyFormatter, t]
  );

  return (
    <div className="dashboard-page">
      <section className="kpi-strip">
        {localizedKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <CulturalSpotlight item={spotlight} />
          <QuickAddCard />
          <div className="spotlight-toggle">
            <button type="button" onClick={() => setSpotlightIndex((index) => (index === 0 ? 1 : 0))}>
              {t('dashboard.spotlightToggle')}
            </button>
          </div>
        </div>
        <div className="dashboard-right">
          <ExpenseDonut data={expenseBreakdown} />
          <IncomeStreamsChart data={incomeStreams} />
          <TimelineCard transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
