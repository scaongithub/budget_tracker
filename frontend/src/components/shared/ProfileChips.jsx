const profiles = [
  { name: 'Paola', icon: '🎉', accent: 'mexico' },
  { name: 'Carlo', icon: '☕', accent: 'italy' }
];

export default function ProfileChips() {
  return (
    <div className="profile-chips" role="group" aria-label="Profiles">
      {profiles.map((profile) => (
        <span key={profile.name} className={`profile-chip ${profile.accent}`}>
          <span aria-hidden>{profile.icon}</span>
          <span>{profile.name}</span>
        </span>
      ))}
    </div>
  );
}
