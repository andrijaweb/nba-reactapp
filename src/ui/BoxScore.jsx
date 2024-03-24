import PlayerMvp from "./PlayerMvp";

function BoxScore({ boxScore, teams }) {
  if (!boxScore || teams.length === 0) return;

  const {
    Game: {
      HomeTeamScore: scoreHome,
      HomeTeam: teamHomeName,
      HomeTeamID: homeId,
      AwayTeamScore: scoreAway,
      AwayTeamID: awayId,
      AwayTeam: teamAwayName,
      Status: status,
    },
    PlayerGames: playerGames,
  } = boxScore;

  const teamHome = teams.filter((team) => team.TeamID === homeId);
  const teamAway = teams.filter((team) => team.TeamID === awayId);

  const sortedPlayersByPoints = playerGames
    .sort((a, b) => b.Points - a.Points)
    .slice(0);

  return (
    <article className="px-8 py-8 bg-white rounded-md grid grid-cols-[1.5fr_1fr_0.5fr] mt-8">
      <div className="flex items-center gap-12">
        <div className="text-center flex items-center gap-4">
          <div>
            <img
              className="w-12 h-12"
              src={teamHome.at(0).WikipediaLogoUrl}
              alt="Home Team Logo"
            />
            <p className="my-2 text-xl">{teamHomeName}</p>
          </div>
          <p className="inline text-2xl font-extrabold">{scoreHome}</p>
        </div>
        <p className="opacity-70">{status}</p>
        <div className="text-center flex items-center gap-4">
          <p className="inline text-2xl font-extrabold">{scoreAway}</p>
          <div>
            <img
              className="w-12 h-12"
              src={teamAway.at(0).WikipediaLogoUrl}
              alt="Away Team Logo"
            />
            <p className="my-2 text-xl">{teamAwayName}</p>
          </div>
        </div>
      </div>
      {status === "Final" || status === "InProgress" ? (
        <div>
          <h3 className="text-xl font-bold mb-2">Game MVP:</h3>
          <figure>
            <div>
              <PlayerMvp player={sortedPlayersByPoints.at(0)} />
            </div>
          </figure>
        </div>
      ) : null}
      <p className="text-2xl flex items-center justify-center opacity-70">
        {status}
      </p>
    </article>
  );
}

export default BoxScore;
