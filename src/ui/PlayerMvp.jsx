function PlayerMvp({ player }) {
  if (!player) return;

  const {
    Position: position,
    Name: name,
    Team: team,
    Points: points,
    Assists: assists,
    Rebounds: rebounds,
  } = player;

  return (
    <div className="flex">
      <div className="mr-14">
        <p>{name}</p>
        <div className="flex items-center gap-2 opacity-70">
          <p>{team}</p>
          <span>|</span>
          <p className="italic">{position}</p>
        </div>
      </div>

      <div className="flex items-center gap-8 text-center">
        <div>
          <p className="font-bold">PTS</p>
          <p className="opacity-70">{Math.round(points)}</p>
        </div>
        <div>
          <p className="font-bold">AST</p>
          <p className="opacity-70">{Math.round(assists)}</p>
        </div>
        <div>
          <p className="font-bold">RBD</p>
          <p className="opacity-70">{Math.round(rebounds)}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerMvp;
