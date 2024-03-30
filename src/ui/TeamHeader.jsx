import { useNavigate } from "react-router-dom";

function TeamHeader({ team, teamSeasonStats }) {
  const navigate = useNavigate();

  if (!team || !teamSeasonStats) return;

  const {
    WikipediaLogoUrl: teamLogoUrl,
    PrimaryColor: primaryColor,
    Division: division,
    City: city,
  } = team;

  const {
    Name: name,
    Games: gamesPlayed,
    Wins: wins,
    Losses: losses,
  } = teamSeasonStats;

  function handleNavigateBack() {
    navigate(-1);
  }

  return (
    <div className="mx-16 text-stone-900 bg-white rounded-md py-6 px-8 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div>
          <p
            onClick={handleNavigateBack}
            className="text-blue-500 mb-4 cursor-pointer"
          >
            &larr; Go Back
          </p>
          <img
            className="max-w-32 max-h-32"
            src={teamLogoUrl}
            alt="Team Logo"
          />
        </div>
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
