import { useMemo, useState } from 'react';
import PillButton from '../components/shared/PillButton.jsx';
import { categories as initialCategories, categoryFilters } from '../data/categories.js';
import { useAppContext } from '../context/AppContext.jsx';

export default function CategoryPage() {
  const { t } = useAppContext();
  const [activeFilter, setActiveFilter] = useState('all');
  const [items, setItems] = useState(initialCategories);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [tone, setTone] = useState('fusion');

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter((item) => item.tone === activeFilter);
  }, [activeFilter, items]);

  const handleAdd = (evt) => {
    evt.preventDefault();
    setItems((prev) => [
      ...prev,
      {
        id: `custom-${Date.now()}`,
        name,
        subcategories: 0,
        tone,
        descriptionKey: 'categories.newDescription'
      }
    ]);
    setName('');
    setTone('fusion');
    setShowForm(false);
  };

  return (
    <div className="category-page">
      <header className="page-header">
        <h1>{t('categories.title')}</h1>
        <p>{t('categories.subtitle')}</p>
      </header>
      <div className="category-layout">
        <aside className="category-sidebar">
          <div className="filter-group">
            <h2>{t('categories.filtersLabel')}</h2>
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setActiveFilter(filter)}
              >
                {t(`categories.filtersList.${filter}`)}
              </button>
            ))}
          </div>
          <PillButton variant="outline" onClick={() => setShowForm((state) => !state)}>
            {showForm ? t('categories.close') : t('categories.addCategory')}
          </PillButton>
          {showForm && (
            <form className="category-form" onSubmit={handleAdd}>
              <label>
                <span>{t('categories.form.name')}</span>
                <input value={name} onChange={(evt) => setName(evt.target.value)} required />
              </label>
              <label>
                <span>{t('categories.form.accent')}</span>
                <select value={tone} onChange={(evt) => setTone(evt.target.value)}>
                  <option value="mexico">{t('categories.cultureLabels.mexico')}</option>
                  <option value="italy">{t('categories.cultureLabels.italy')}</option>
                  <option value="fusion">{t('categories.cultureLabels.fusion')}</option>
                </select>
              </label>
              <PillButton type="submit">{t('categories.form.save')}</PillButton>
            </form>
          )}
        </aside>
        <section className="category-content">
          <div className="category-table" role="table" aria-label={t('categories.title')}>
            <div className="category-row header" role="row">
              <span role="columnheader">{t('categories.headers.category')}</span>
              <span role="columnheader">{t('categories.headers.subcategories')}</span>
              <span role="columnheader">{t('categories.headers.culturalTag')}</span>
              <span role="columnheader">{t('categories.headers.actions')}</span>
            </div>
            {filtered.map((item) => {
              const displayName = item.name ?? t(`categories.items.${item.id}.name`);
              const displayDescription =
                item.description ??
                (item.descriptionKey ? t(item.descriptionKey) : t(`categories.items.${item.id}.description`));
              return (
                <div key={item.id ?? item.name} className={`category-row ${item.tone}`} role="row">
                  <span role="cell">
                    <strong>{displayName}</strong>
                    <small>{displayDescription}</small>
                  </span>
                  <span role="cell">{item.subcategories}</span>
                  <span role="cell" className="category-tag">
                    {t(`categories.cultureLabels.${item.tone}`)}
                  </span>
                  <span role="cell" className="row-actions">
                    <button
                      type="button"
                      className="icon-button"
                      aria-label={`${t('categories.actions.edit')} ${displayName}`}
                    >
                      🎨
                    </button>
                    <button
                      type="button"
                      className="icon-button"
                      aria-label={`${t('categories.actions.delete')} ${displayName}`}
                    >
                      🏛️
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
          <footer className="category-footer">
            <p>{t('categories.footer')}</p>
          </footer>
        </section>
      </div>
    </div>
  );
}
