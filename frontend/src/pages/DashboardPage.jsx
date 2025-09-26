import { useMemo, useState } from 'react';
import KpiCard from '../components/cards/KpiCard.jsx';
import CulturalSpotlight from '../components/cards/CulturalSpotlight.jsx';
import QuickAddCard from '../components/cards/QuickAddCard.jsx';
import TimelineCard from '../components/cards/TimelineCard.jsx';
import ExpenseDonut from '../components/charts/ExpenseDonut.jsx';
import IncomeStreamsChart from '../components/charts/IncomeStreamsChart.jsx';
import { expenseBreakdown, incomeStreams, kpis, spotlightItems, transactions } from '../data/dashboard.js';

export default function DashboardPage() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const spotlight = useMemo(() => spotlightItems[spotlightIndex], [spotlightIndex]);

  return (
    <div className="dashboard-page">
      <section className="kpi-strip">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>
      <div className="dashboard-grid">
        <div className="dashboard-left">
          <CulturalSpotlight item={spotlight} />
          <QuickAddCard />
          <div className="spotlight-toggle">
            <button type="button" onClick={() => setSpotlightIndex((index) => (index === 0 ? 1 : 0))}>
              Swap Spotlight
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
