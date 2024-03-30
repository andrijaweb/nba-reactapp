import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useNba } from "../contexts/nbaContext";
import { PAGE_SIZE } from "../utils/constants";

import PlayersTable from "../ui/PlayersTable";
import Spinner from "../ui/Spinner";
import PlayersTableOperations from "../ui/PlayersTableOperations";
import Pagination from "../ui/Pagination";

function Players() {
  const { getActivePlayers, players, isLoading } = useNba();
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  useEffect(function () {
    getActivePlayers();
  }, []);

  if (isLoading) return <Spinner />;
  if (!players || players.lenght === 0) return;

  const lastPlayersIndex = currentPage * PAGE_SIZE;
  const firstPlayersIndex = lastPlayersIndex - PAGE_SIZE;

  // 1) Filter
  const filterValue = searchParams.get("team") || "all";

  let filteredPlayers;
  if (filterValue === "all") filteredPlayers = players;
  if (filterValue !== "all")
    filteredPlayers = players.filter((player) => player.Team === filterValue);

  // 2) Sort
  const sortBy = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedPlayers = filteredPlayers.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  const playersByPage = sortedPlayers.slice(
    firstPlayersIndex,
    lastPlayersIndex
  );

  return (
    <div className="px-16">
      <div className="p-8 rounded-md bg-white">
        <h1 className="text-lg font-bold text-blue-800 uppercase">
          All Players:
        </h1>
        <div>
          <div className="flex items-center justify-between my-4">
            <PlayersTableOperations />
            <Pagination count={sortedPlayers.length} />
          </div>
        </div>
        <PlayersTable players={playersByPage} />
      </div>
    </div>
  );
}

export default Players;
