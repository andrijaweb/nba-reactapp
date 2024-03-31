import { useEffect, useState } from "react";
import DateFilter from "../ui/DateFilter";
import Spinner from "../ui/Spinner";

import BoxScore from "../ui/BoxScore";
import { formatDate } from "../utils/helpers";
import { useNba } from "../contexts/nbaContext";

function Games() {
  const [date, setDate] = useState(formatDate(new Date()));

  const { getAllTeams, teams, getBoxScores, boxScores, isLoading } = useNba();

  useEffect(
    function () {
      getAllTeams();
      getBoxScores(date);
    },
    [date]
  );

  if (isLoading) return <Spinner />;
  if (!boxScores) return;

  return (
    <div>
      <section>
        <DateFilter date={date} setDate={setDate} />
        {boxScores.map((score, i) => (
          <BoxScore boxScore={score} teams={teams} key={i} />
        ))}
      </section>
    </div>
  );
}

export default Games;
