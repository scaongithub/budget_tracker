import StackedBar from '../components/charts/StackedBar.jsx';
import SavingsProjectionChart from '../components/charts/SavingsProjectionChart.jsx';
import PillButton from '../components/shared/PillButton.jsx';
import { monthlySummaries, projectionData, reportFilters, stackedBarData } from '../data/reports.js';

export default function ReportsPage() {
  return (
    <div className="reports-page">
      <header className="page-header">
        <h1>Reports / Reportes / Rapporti</h1>
        <p>Crea historias financieras con subrayados tricolores dinámicos.</p>
      </header>
      <section className="reports-filter-bar" aria-label="Report filters">
        <div className="filter-field">
          <label>
            <span>Date From</span>
            <input type="date" defaultValue={reportFilters.range.start} />
          </label>
          <label>
            <span>Date To</span>
            <input type="date" defaultValue={reportFilters.range.end} />
          </label>
        </div>
        <div className="filter-chips">
          {reportFilters.categories.map((category) => (
            <span key={category} className="chip">
              {category}
            </span>
          ))}
        </div>
        <div className="export-actions">
          <PillButton variant="secondary">Export CSV</PillButton>
          <PillButton variant="outline">Export PDF</PillButton>
        </div>
      </section>
      <div className="reports-grid">
        <StackedBar data={stackedBarData} />
        <SavingsProjectionChart data={projectionData} />
        <section className="summary-table" aria-label="Monthly summaries">
          <h3>Monthly Summaries</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
                <th>Expenses</th>
                <th>Savings</th>
              </tr>
            </thead>
            <tbody>
              {monthlySummaries.map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{row.income}</td>
                  <td>{row.expenses}</td>
                  <td>{row.savings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
