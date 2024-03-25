import { useEffect, useState } from "react";
import DateFilter from "../ui/DateFilter";
import Spinner from "../ui/Spinner";

import { getAllTeams, getBoxScores } from "../services/apiBasketball";
import BoxScore from "../ui/BoxScore";
import { formatDate } from "../utils/helpers";

function Games() {
  const [date, setDate] = useState(formatDate(new Date()));
  const [isLoading, setIsLoading] = useState(false);
  const [boxScores, setBoxScores] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(
    function () {
      async function fetchBoxScores() {
        setIsLoading(true);
        const dataBoxScores = await getBoxScores(date);
        const dataTeams = await getAllTeams();

        setBoxScores(dataBoxScores);
        setTeams(dataTeams);

        setIsLoading(false);
      }
      fetchBoxScores();
    },
    [date]
  );

  if (isLoading) return <Spinner />;
  if (!boxScores) return;

  return (
    <div>
      <div className="px-16">
        <DateFilter date={date} setDate={setDate} />
        {boxScores.map((score, i) => (
          <BoxScore boxScore={score} teams={teams} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Games;
