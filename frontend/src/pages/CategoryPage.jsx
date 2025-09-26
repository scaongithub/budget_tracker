import { useMemo, useState } from 'react';
import PillButton from '../components/shared/PillButton.jsx';
import { categories as initialCategories, categoryFilters } from '../data/categories.js';

export default function CategoryPage() {
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
      { name, subcategories: 0, culture: tone === 'mexico' ? 'Mexican' : tone === 'italy' ? 'Italian' : 'Fusion', tone, description: 'New cultural category' }
    ]);
    setName('');
    setTone('fusion');
    setShowForm(false);
  };

  return (
    <div className="category-page">
      <header className="page-header">
        <h1>Category Management</h1>
        <p>Organiza etiquetas con el ritmo de mariachi y melodías italianas.</p>
      </header>
      <div className="category-layout">
        <aside className="category-sidebar">
          <div className="filter-group">
            <h2>Filters</h2>
            {categoryFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={filter.value === activeFilter ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <PillButton variant="outline" onClick={() => setShowForm((state) => !state)}>
            {showForm ? 'Close' : 'Add Category'}
          </PillButton>
          {showForm && (
            <form className="category-form" onSubmit={handleAdd}>
              <label>
                <span>Name</span>
                <input value={name} onChange={(evt) => setName(evt.target.value)} required />
              </label>
              <label>
                <span>Cultural Accent</span>
                <select value={tone} onChange={(evt) => setTone(evt.target.value)}>
                  <option value="mexico">Mexican</option>
                  <option value="italy">Italian</option>
                  <option value="fusion">Fusion</option>
                </select>
              </label>
              <PillButton type="submit">Save</PillButton>
            </form>
          )}
        </aside>
        <section className="category-content">
          <div className="category-table" role="table">
            <div className="category-row header" role="row">
              <span role="columnheader">Category</span>
              <span role="columnheader">Subcategories</span>
              <span role="columnheader">Cultural Tag</span>
              <span role="columnheader">Actions</span>
            </div>
            {filtered.map((item) => (
              <div key={item.name} className={`category-row ${item.tone}`} role="row">
                <span role="cell">
                  <strong>{item.name}</strong>
                  <small>{item.description}</small>
                </span>
                <span role="cell">{item.subcategories}</span>
                <span role="cell" className="category-tag">
                  {item.culture}
                </span>
                <span role="cell" className="row-actions">
                  <button type="button" className="icon-button" aria-label={`Edit ${item.name}`}>
                    🎨
                  </button>
                  <button type="button" className="icon-button" aria-label={`Delete ${item.name}`}>
                    🏛️
                  </button>
                </span>
              </div>
            ))}
          </div>
          <footer className="category-footer">
            <p>🎺 Celebra tus ahorros como mariachi, ☕ saborea cada logro con espresso.</p>
          </footer>
        </section>
      </div>
    </div>
  );
}
