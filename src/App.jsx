import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Games from "./pages/Games";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./ui/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="teams" element={<Teams />} />
            <Route path="players" element={<Players />} />
            <Route path="games" element={<Games />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
