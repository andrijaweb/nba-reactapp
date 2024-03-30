import { useEffect } from "react";
import TeamsConference from "../ui/TeamsDivision";
import Spinner from "../ui/Spinner";
import { useNba } from "../contexts/nbaContext";

function Teams() {
  const { getAllTeams, teams, isLoading } = useNba();

  useEffect(function () {
    getAllTeams();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="mx-16 px-8 py-4 bg-white rounded-md">
      <h1 className="uppercase text-2xl font-bold mb-4 text-blue-800">
        All Teams
      </h1>
      <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-colds-[1fr_1fr] gap-8">
        <TeamsConference teams={teams} />
      </div>
    </div>
  );
}

export default Teams;
