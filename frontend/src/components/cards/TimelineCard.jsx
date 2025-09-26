import { useMemo } from 'react';
import { useAppContext } from '../../context/AppContext.jsx';

export default function TimelineCard({ transactions }) {
  const { t, locale } = useAppContext();
  const headers = t('dashboard.timeline.headers');

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        signDisplay: 'always',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }),
    [locale]
  );

  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }),
    [locale]
  );

  return (
    <article className="timeline-card">
      <h3>{t('dashboard.timeline.title')}</h3>
      <table className="timeline-table">
        <thead>
          <tr>
            <th>{headers.name}</th>
            <th>{headers.person}</th>
            <th>{headers.date}</th>
            <th className="align-right">{headers.amount}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => {
            const amount = currencyFormatter.format(tx.amount);
            const formattedDate = dateFormatter.format(new Date(tx.date));
            return (
              <tr key={tx.id} className={`timeline-row ${tx.tone}`}>
                <td>{t(`dashboard.timeline.items.${tx.name}`)}</td>
                <td>{tx.person}</td>
                <td>{formattedDate}</td>
                <td className={tx.amount >= 0 ? 'tx-amount positive' : 'tx-amount negative'}>{amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
}
