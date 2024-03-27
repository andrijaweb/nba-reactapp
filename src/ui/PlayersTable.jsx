function PlayersTable() {
  return (
    <table className="w-full border-collapse border-spacing-0 border-b">
      <thead>
        <tr className="text-left bg-blue-200 rounded-md text-sm uppercase text-stone-700">
          <th className="p-4">Player</th>
          <th className="p-4">Team</th>
          <th className="p-4 text-right">Number</th>
          <th className="p-4">Position</th>
          <th className="p-4 text-right">Height</th>
          <th className="p-4">Weight</th>
          <th className="p-4">City</th>
          <th className="p-4">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-sm font-semibold text-stone-900 hover:bg-blue-50 transition-all duration-300">
          <td className="p-4 border-b border-t text-blue-500">Full Name</td>
          <td className="p-4 border-b border-t text-blue-500">BOS</td>
          <td className="p-4 border-b border-t text-right">1</td>
          <td className="p-4 border-b border-t">F</td>
          <td className="p-4 border-b border-t text-right">6'9</td>
          <td className="p-4 border-b border-t">209 lbs</td>
          <td className="p-4 border-b border-t">Subotica</td>
          <td className="p-4 border-b border-t">Serbia</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PlayersTable;
