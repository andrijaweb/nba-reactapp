function PlayerDetails({ player }) {
  const {
    BirthCity: city,
    BirthCountry: country,
    FirstName: firstName,
    LastName: lastName,
    Height: height,
    Weight: weight,
    Jersey: jerseyNum,
    Team: team,
    PositionCategory: position,
  } = player;

  return (
    <tr className="text-sm font-semibold text-stone-900 hover:bg-blue-50 transition-all duration-300">
      <td className="p-4 border-b border-t text-blue-500">
        {firstName} {lastName}
      </td>
      <td className="p-4 border-b border-t text-blue-500">{team}</td>
      <td className="p-4 border-b border-t text-right">{jerseyNum}</td>
      <td className="p-4 border-b border-t">{position}</td>
      <td className="p-4 border-b border-t text-right">
        {height.toString().length > 1
          ? height.toString().split("").join("-")
          : height}
      </td>
      <td className="p-4 border-b border-t">{weight} lbs</td>
      <td className="p-4 border-b border-t">{city}</td>
      <td className="p-4 border-b border-t">{country}</td>
    </tr>
  );
}

export default PlayerDetails;
