import PlayersTable from "../ui/PlayersTable";

function Players() {
  return (
    <div className="px-16">
      <div className="p-8 rounded-md bg-white">
        <h1 className="text-lg font-bold text-blue-800 uppercase">
          All Players:
        </h1>
        <div>Filters</div>
        <PlayersTable />
      </div>
    </div>
  );
}

export default Players;
