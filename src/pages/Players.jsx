import { useEffect, useState } from "react";
import PlayersTable from "../ui/PlayersTable";
import { getActivePlayers } from "../services/apiBasketball";
import Spinner from "../ui/Spinner";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Players() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchPlayers() {
      setIsLoading(true);

      const dataActivePlayers = await getActivePlayers();
      setPlayers(dataActivePlayers);

      setIsLoading(false);
    }
    fetchPlayers();
  }, []);

  if (isLoading) return <Spinner />;

  const playersZeroToFive = players.slice(0, 5);

  return (
    <div className="px-16">
      <div className="p-8 rounded-md bg-white">
        <h1 className="text-lg font-bold text-blue-800 uppercase">
          All Players:
        </h1>
        <div>
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center gap-4">
              <select className="block w-full py-2 pl-2 pr-4 rounded-md">
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="height">Height</option>
                <option value="weight">Weight</option>
              </select>

              <select className="block w-full py-2 pl-2 pr-4 rounded-md">
                <option value="">Team</option>
                <option value="76ers">76ers</option>
                <option value="Bucks">Bucks</option>
                <option value="Bulls">Bulls</option>
                <option value="Cavaliers">Cavaliers</option>
                <option value="Celtics">Celtics</option>
                <option value="Clippers">Clippers</option>
                <option value="CGrizzliesHI">Grizzlies</option>
                <option value="Hawks">Hawks</option>
                <option value="Heat">Heat</option>
                <option value="Hornets">Hornets</option>
                <option value="Kings">Kings</option>
                <option value="Knicks">Knicks</option>
                <option value="Lakers">Lakers</option>
                <option value="Magic">Magic</option>
                <option value="Mavericks">Mavericks</option>
                <option value="Nets">Nets</option>
                <option value="Nuggets">Nuggets</option>
                <option value="Pacers">Pacers</option>
                <option value="Pelicans">Pelicans</option>
                <option value="Pistons">Pistons</option>
                <option value="Raptors">Raptors</option>
                <option value="Rockets">Rockets</option>
                <option value="Spurs">Spurs</option>
                <option value="Suns">Suns</option>
                <option value="Thunder">Thunder</option>
                <option value="Timberwolves">Timberwolves</option>
                <option value="Trail Blazers">Trail Blazers</option>
                <option value="Warriors">Warriors</option>
                <option value="Wizards">Wizards</option>
              </select>
            </div>
            <div className="flex items-center gap-8">
              <p className="opacity-70">Showing 1 to 10 of 537 results.</p>
              <div className="flex gap-2">
                <button className="cursor-pointer p-2 bg-stone-200 rounded-md">
                  <HiChevronLeft className="text-2xl text-blue-500" />
                </button>
                <button className="cursor-pointer p-2 bg-stone-200 rounded-md">
                  <HiChevronRight className="text-2xl text-blue-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <PlayersTable players={playersZeroToFive} />
      </div>
    </div>
  );
}

export default Players;
