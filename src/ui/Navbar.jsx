function Navbar() {
  return (
    <div className="flex items-center justify-between px-16 py-6">
      <div>
        <img
          className="h-9"
          src="../../public/nba-seeklogo.svg"
          alt="NBA logo"
        />
      </div>
      <ul className="text-stone-900 flex items-center justify-between gap-8 uppercase">
        <li className="transition-all duration-300 hover:text-stone-700">
          <a href="#">Games</a>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700">
          <a href="#">Teams</a>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700">
          <a href="#">Players</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
