import PillButton from '../shared/PillButton.jsx';
import { useAppContext } from '../../context/AppContext.jsx';

export default function QuickAddCard() {
  const { openModal, t } = useAppContext();
  return (
    <article className="quick-add-card">
      <h3>{t('dashboard.quickAdd.title')}</h3>
      <p>{t('dashboard.quickAdd.description')}</p>
      <div className="quick-add-actions">
        <PillButton onClick={() => openModal('income')}>{t('dashboard.quickAdd.addIncome')}</PillButton>
        <PillButton variant="secondary" onClick={() => openModal('expense')}>
          {t('dashboard.quickAdd.addExpense')}
        </PillButton>
      </div>
    </article>
  );
}
