import { Outlet } from "react-router-dom";
import Header from "./Header";
import Siderbar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-gray-50 h-screen grid grid-cols-[5fr_6fr] grid-rows-[1fr_11fr]">
      <Header />
      <Siderbar />
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
