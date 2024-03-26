function TeamHeader({ team, teamSeasonStats }) {
  //   if (team.length === 0) return;

  const {
    WikipediaLogoUrl: teamLogoUrl,
    PrimaryColor: primaryColor,
    Division: division,
    HeadCoach: coach,
    City: city,
  } = team;

  const {
    Name: name,
    Games: gamesPlayed,
    Wins: wins,
    Losses: losses,
  } = teamSeasonStats;

  console.log(team);
  console.log(teamSeasonStats);

  return (
    <div className="mx-16 text-stone-900 bg-white rounded-md py-6 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <img className="max-w-32 max-h-32" src={teamLogoUrl} alt="Team Logo" />
        <div>
          <h3 className="font-extrabold text-2xl">{name}</h3>
          <p style={{ color: `#${primaryColor}` }}>
            Division: <span className="italic">{division}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <div className="mb-4">
          <h3 className="text-lg font-bold">Based in:</h3>
          <p style={{ color: `#${primaryColor}` }}>{city}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Season Stats:</h3>
          <div className="text-sm">
            <p>
              Games Played:{" "}
              <span className="font-bold" style={{ color: `#${primaryColor}` }}>
                {gamesPlayed}
              </span>
            </p>
            <div className="flex items-center gap-4 justify-center">
              <p>
                W:{" "}
                <span
                  className="font-bold"
                  style={{ color: `#${primaryColor}` }}
                >
                  {wins}
                </span>
              </p>
              <p>
                L:{" "}
                <span
                  className="font-bold"
                  style={{ color: `#${primaryColor}` }}
                >
                  {losses}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;
