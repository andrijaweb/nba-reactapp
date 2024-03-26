import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Teams from "./pages/Teams";
import Team from "./ui/Team";
import Players from "./pages/Players";
import Games from "./pages/Games";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="teams" element={<Teams />} />
          <Route path="teams/:id" element={<Team />} />
          <Route path="players" element={<Players />} />
          <Route path="games" element={<Games />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
