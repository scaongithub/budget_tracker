export default function TimelineCard({ transactions }) {
  return (
    <article className="timeline-card">
      <h3>Recent Activity</h3>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.id} className={tx.tone}>
            <div>
              <p>{tx.label}</p>
              <span className="tx-tag">{tx.tag}</span>
            </div>
            <span className="tx-amount">{tx.amount}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
