import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("dark");
    },
    [isDark]
  );

  return (
    <header className="flex items-center justify-between px-16 py-6 dark:bg-stone-900">
      <NavLink to="/">
        <img className="h-9" src="../../nba-seeklogo.svg" alt="NBA logo" />
      </NavLink>
      <ul className="text-stone-900 dark:text-stone-100 flex items-center justify-between gap-8 uppercase">
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <NavLink to="/games">Games</NavLink>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <NavLink to="/teams">Teams</NavLink>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <NavLink to="/players">Players</NavLink>
        </li>
        <li className="transition-all duration-300 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 p-2">
          <button
            className="flex justify-center items-center w-5 h-5"
            onClick={() => setIsDark((dark) => !dark)}
          >
            {/* <HiSun className="w-full h-full" /> */}
            {isDark ? (
              <HiSun className="w-full h-full" />
            ) : (
              <HiMoon className="w-full h-full" />
            )}
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
