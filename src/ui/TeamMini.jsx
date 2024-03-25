function TeamMini({ team }) {
  if (!team) return;

  const { WikipediaLogoUrl: teamLogoUrl, Name: name, City: city } = team;

  return (
    <figure className="flex items-center gap-6 mb-4">
      <img className="max-w-10" src={teamLogoUrl} alt="Team Logo" />
      <div>
        <h4 className="font-bold">
          {name}, {city}
        </h4>
        <ul className="text-blue-500 flex items-center gap-4 text-xs italic">
          <li>Profile</li>
          <li>Stats</li>
        </ul>
      </div>
    </figure>
  );
}

export default TeamMini;
