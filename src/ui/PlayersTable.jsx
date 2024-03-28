import PlayerDetails from "./PlayerDetails";

function PlayersTable({ players }) {
  if (!players || players.length === 0) return;

  console.log(players);

  return (
    <table className="w-full border-collapse border-spacing-0 border-b">
      <thead>
        <tr className="text-left bg-blue-200 rounded-md text-sm uppercase text-stone-700">
          <th className="p-4">Player</th>
          <th className="p-4">Team</th>
          <th className="p-4 text-right">Number</th>
          <th className="p-4">Position</th>
          <th className="p-4 text-right">Height</th>
          <th className="p-4">Weight</th>
          <th className="p-4">City</th>
          <th className="p-4">Country</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <PlayerDetails player={player} key={player.PlayerID} />
        ))}
      </tbody>
    </table>
  );
}

export default PlayersTable;
