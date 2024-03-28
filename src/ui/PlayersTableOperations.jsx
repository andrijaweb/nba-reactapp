import Filter from "./Filter";
import SortBy from "./SortBy";

function PlayersTableOperations() {
  return (
    <div className="flex items-center gap-4">
      <Filter
        filterField="team"
        options={[
          { value: "all", label: "All Team" },
          { value: "PHI", label: "76ers" },
          { value: "MIL", label: "Bucks" },
          { value: "CHI", label: "Bulls" },
          { value: "CLE", label: "Cavaliers" },
          { value: "BOS", label: "Celtics" },
          { value: "LAC", label: "Clippers" },
          { value: "MEM", label: "Grizzlies" },
          { value: "ATL", label: "Hawks" },
          { value: "MIA", label: "Heat" },
          { value: "CHA", label: "Hornets" },
          { value: "SAC", label: "Kings" },
          { value: "NY", label: "Knicks" },
          { value: "LAL", label: "Lakers" },
          { value: "ORL", label: "Magic" },
          { value: "DAL", label: "Mavericks" },
          { value: "CHA", label: "Nets" },
          { value: "DEN", label: "Nuggets" },
          { value: "IND", label: "Pacers" },
          { value: "NO", label: "Pelicans" },
          { value: "DET", label: "Pistons" },
          { value: "TOR", label: "Raptors" },
          { value: "HOU", label: "Rockets" },
          { value: "SA", label: "Spurs" },
          { value: "PHO", label: "Suns" },
          { value: "OKC", label: "Thunder" },
          { value: "MIN", label: "Timberwolves" },
          { value: "POR", label: "Trail Blazers" },
          { value: "GS", label: "Warriors" },
          { value: "WAS", label: "Wizards" },
        ]}
      />

      <SortBy
        options={[
          { value: "FirstName-asc", label: "Sort by name (A-Z)" },
          { value: "FirstName-desc", label: "Sort by name (Z-A)" },
          { value: "Height-asc", label: "Sort by height (L-H)" },
          { value: "Height-desc", label: "Sort by height (H-L)" },
          { value: "Weight-asc", label: "Sort by weight (L-H)" },
          { value: "Weight-desc", label: "Sort by weight (H-L)" },
        ]}
      />
    </div>
  );
}

export default PlayersTableOperations;
