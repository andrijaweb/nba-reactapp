import TeamMini from "./TeamMini";

function TeamsConference({ teams }) {
  if (teams.length === 0) return;

  const atlanticTeam = teams.filter((team) => team.Division === "Atlantic");
  const centralTeam = teams.filter((team) => team.Division === "Central");
  const SouthEastTeam = teams.filter((team) => team.Division === "Southeast");
  const northWestTeam = teams.filter((team) => team.Division === "Northwest");
  const pacificTeam = teams.filter((team) => team.Division === "Pacific");
  const southWestTeam = teams.filter((team) => team.Division === "Southwest");

  return (
    <>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Atlantic:</h3>
        {atlanticTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Central:</h3>
        {centralTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Southeast:</h3>
        {SouthEastTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Northwest:</h3>
        {northWestTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Pacific:</h3>
        {pacificTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
      <article>
        <h3 className="uppercase font-bold text-lg mb-4">Southwest:</h3>
        {southWestTeam.map((team) => (
          <TeamMini key={team.TeamID} team={team} />
        ))}
      </article>
    </>
  );
}

export default TeamsConference;
