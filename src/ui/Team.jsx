import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useNba } from "../contexts/nbaContext";

import TeamHeader from "./TeamHeader";
import Spinner from "./Spinner";

function Team() {
  const { getAllTeams, teams, getTeamSeasonStats, teamSeasonStats, isLoading } =
    useNba();

  const { id } = useParams();

  useEffect(function () {
    getAllTeams();
    getTeamSeasonStats();
  }, []);

  // if (teams.length === 0) return;

  const [selectedTeam] = teams?.filter((team) => team.TeamID === +id);
  const [selectedTeamStats] = teamSeasonStats?.filter(
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
