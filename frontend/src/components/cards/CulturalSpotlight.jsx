import { useAppContext } from '../../context/AppContext.jsx';

export default function CulturalSpotlight({ item }) {
  const { t } = useAppContext();

  return (
    <article className={`spotlight-card ${item.accent}`}>
      <h3>{t(`dashboard.spotlights.${item.id}.title`)}</h3>
      <p>{t(`dashboard.spotlights.${item.id}.description`)}</p>
    </article>
  );
}
