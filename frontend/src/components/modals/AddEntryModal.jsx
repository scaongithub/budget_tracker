import { useState } from 'react';
import { useAppContext } from '../../context/AppContext.jsx';
import PillButton from '../shared/PillButton.jsx';

const initialForm = {
  amount: '',
  date: '',
  description: '',
  category: 'groceries',
  split: 50
};

const categories = ['groceries', 'transport', 'housing', 'leisure'];

export default function AddEntryModal() {
  const { modalState, closeModal, setModalTab, t } = useAppContext();
  const [form, setForm] = useState(initialForm);

  const handleClose = () => {
    closeModal();
    setForm(initialForm);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // placeholder for integration: display console log
    console.info('Saved entry', { ...form, type: modalState.tab });
    handleClose();
  };

  if (!modalState.open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="entry-modal-title">
      <div className="modal-card">
        <header className="modal-header">
          <h2 id="entry-modal-title">{t('modal.title')}</h2>
          <div className="modal-tabs" role="tablist" aria-label={t('modal.ariaTabs')}>
            {['income', 'expense'].map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={modalState.tab === tab}
                className={modalState.tab === tab ? 'modal-tab active' : 'modal-tab'}
                onClick={() => setModalTab(tab)}
              >
                {t(`modal.tabs.${tab}`)}
              </button>
            ))}
          </div>
          <p className="modal-subtitle">{t('modal.subtitle')}</p>
        </header>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              <span>{t('modal.amount')}</span>
              <input
                name="amount"
                type="number"
                min="0"
                step="0.01"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span>{t('modal.date')}</span>
              <input name="date" type="date" value={form.date} onChange={handleChange} required />
            </label>
          </div>
          <label>
            <span>{t('modal.description')}</span>
            <input name="description" type="text" value={form.description} onChange={handleChange} />
          </label>
          <label>
            <span>{t('modal.category')}</span>
            <select name="category" value={form.category} onChange={handleChange}>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {t(`modal.categories.${option}`)}
                </option>
              ))}
            </select>
          </label>
          <label className="slider-field">
            <span>{t('modal.split')}</span>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={form.split}
              onChange={(evt) => setForm((prev) => ({ ...prev, split: Number(evt.target.value) }))}
            />
            <div className="slider-labels" aria-hidden>
              <span>🎩 {form.split}%</span>
              <span>{100 - form.split}% 🚤</span>
            </div>
          </label>
          <footer className="modal-actions">
            <PillButton type="submit" variant="primary">
              {modalState.tab === 'income' ? t('modal.saveIncome') : t('modal.saveExpense')}
            </PillButton>
            <PillButton type="button" variant="ghost" onClick={handleClose}>
              {t('modal.cancel')}
            </PillButton>
          </footer>
        </form>
      </div>
    </div>
  );
}
