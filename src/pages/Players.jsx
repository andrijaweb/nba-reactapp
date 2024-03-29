import { useEffect, useState } from "react";
import PlayersTable from "../ui/PlayersTable";
import { getActivePlayers } from "../services/apiBasketball";
import Spinner from "../ui/Spinner";

import PlayersTableOperations from "../ui/PlayersTableOperations";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";
import { PAGE_SIZE } from "../utils/constants";

function Players() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  useEffect(
    function () {
      async function fetchPlayers() {
        setIsLoading(true);

        const dataActivePlayers = await getActivePlayers();
        setPlayers(dataActivePlayers);

        setIsLoading(false);
      }
      fetchPlayers();
    },
    [currentPage]
  );

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
            {/* <div className="flex items-center gap-8">
              <p className="opacity-70">Showing 1 to 10 of 537 results.</p>
              <div className="flex gap-2">
                <button className="cursor-pointer p-2 bg-stone-200 rounded-md">
                  <HiChevronLeft className="text-2xl text-blue-500" />
                </button>
                <button className="cursor-pointer p-2 bg-stone-200 rounded-md">
                  <HiChevronRight className="text-2xl text-blue-500" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <PlayersTable players={playersByPage} />
      </div>
    </div>
  );
}

export default Players;
