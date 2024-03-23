import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
