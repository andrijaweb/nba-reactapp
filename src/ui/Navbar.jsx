import { HiMoon, HiSun } from "react-icons/hi";

function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="flex items-center justify-between px-16 py-6 dark:bg-stone-900">
      <div>
        <img className="h-9" src="../../nba-seeklogo.svg" alt="NBA logo" />
      </div>
      <ul className="text-stone-900 dark:text-stone-100 flex items-center justify-between gap-8 uppercase">
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <a href="#">Games</a>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <a href="#">Teams</a>
        </li>
        <li className="transition-all duration-300 hover:text-stone-700 dark:hover:text-stone-400">
          <a href="#">Players</a>
        </li>
        <li className="transition-all duration-300 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 p-2">
          <button
            className="flex justify-center items-center w-5 h-5"
            onClick={() => setIsDarkMode((mode) => !mode)}
          >
            {isDarkMode ? (
              <HiSun className="w-full h-full" />
            ) : (
              <HiMoon className="w-full h-full" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
