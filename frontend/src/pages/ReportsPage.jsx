import { useMemo } from 'react';
import StackedBar from '../components/charts/StackedBar.jsx';
import SavingsProjectionChart from '../components/charts/SavingsProjectionChart.jsx';
import PillButton from '../components/shared/PillButton.jsx';
import { monthlySummaries, projectionData, reportFilters, stackedBarData } from '../data/reports.js';
import { useAppContext } from '../context/AppContext.jsx';

export default function ReportsPage() {
  const { t, locale } = useAppContext();

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
    <div className="reports-page">
      <header className="page-header">
        <h1>{t('reports.title')}</h1>
        <p>{t('reports.subtitle')}</p>
      </header>
      <section className="reports-filter-bar" aria-label={t('reports.filters.aria')}>
        <div className="filter-field">
          <label>
            <span>{t('reports.filters.dateFrom')}</span>
            <input type="date" defaultValue={reportFilters.range.start} />
          </label>
          <label>
            <span>{t('reports.filters.dateTo')}</span>
            <input type="date" defaultValue={reportFilters.range.end} />
          </label>
        </div>
        <div className="filter-chips">
          {reportFilters.categories.map((category) => (
            <span key={category} className="chip">
              {t(`reports.filterCategories.${category}`)}
            </span>
          ))}
        </div>
        <div className="export-actions">
          <PillButton variant="secondary">{t('reports.exportCsv')}</PillButton>
          <PillButton variant="outline">{t('reports.exportPdf')}</PillButton>
        </div>
      </section>
      <div className="reports-grid">
        <StackedBar data={stackedBarData} />
        <SavingsProjectionChart data={projectionData} />
        <section className="summary-table" aria-label={t('reports.summaryTitle')}>
          <h3>{t('reports.summaryTitle')}</h3>
          <table>
            <thead>
              <tr>
                <th>{t('reports.tableHeaders.month')}</th>
                <th>{t('reports.tableHeaders.income')}</th>
                <th>{t('reports.tableHeaders.expenses')}</th>
                <th>{t('reports.tableHeaders.savings')}</th>
              </tr>
            </thead>
            <tbody>
              {monthlySummaries.map((row) => (
                <tr key={row.month}>
                  <td>{t(`reports.months.${row.month}`)}</td>
                  <td>{currencyFormatter.format(row.income)}</td>
                  <td>{currencyFormatter.format(row.expenses)}</td>
                  <td>{currencyFormatter.format(row.savings)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
