export default function CulturalSpotlight({ item }) {
  return (
    <article className={`spotlight-card ${item.accent}`}>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
