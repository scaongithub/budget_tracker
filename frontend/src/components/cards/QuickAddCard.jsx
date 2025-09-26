import PillButton from '../shared/PillButton.jsx';
import { useAppContext } from '../../context/AppContext.jsx';

export default function QuickAddCard() {
  const { openModal } = useAppContext();
  return (
    <article className="quick-add-card">
      <h3>Quick Add</h3>
      <p>Captura ingresos y gastos con toques culturales personalizados.</p>
      <div className="quick-add-actions">
        <PillButton onClick={() => openModal('income')}>Add Income</PillButton>
        <PillButton variant="secondary" onClick={() => openModal('expense')}>
          Add Expense
        </PillButton>
      </div>
    </article>
  );
}
