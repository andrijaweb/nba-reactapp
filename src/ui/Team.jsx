import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTeams, getTeamSeasonStats } from "../services/apiBasketball";
import TeamHeader from "./TeamHeader";
import Spinner from "./Spinner";

function Team() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [allTeams, setAllTeams] = useState([]);
  const [teamSeasonStats, setTeamSeasonStats] = useState([]);

  useEffect(function () {
    async function fetchTeams() {
      setIsLoading(true);

      const dataAllTeams = await getAllTeams();
      setAllTeams(dataAllTeams);
      const dataTeamSeasonStats = await getTeamSeasonStats();
      setTeamSeasonStats(dataTeamSeasonStats);

      setIsLoading(false);
    }
    fetchTeams();
  }, []);

  if (allTeams.length === 0) return;

  const [selectedTeam] = allTeams.filter((team) => team.TeamID === +id);
  const [selectedTeamStats] = teamSeasonStats.filter(
    (teamStats) => teamStats.TeamID === +id
  );

  if (isLoading) return <Spinner />;

  return (
    <div>
      <TeamHeader team={selectedTeam} teamSeasonStats={selectedTeamStats} />
    </div>
  );
}

export default Team;
