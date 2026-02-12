import { Outlet } from "react-router";
import Sidebar from "../../components/sidebar/Sidebar";
import SearchBar from "../../components/searchbar/searchBar";
import { useState } from "react";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen max-h-screen flex flex-row flex-nowrap bg-[#eee]">
      <Sidebar setOpenMenu={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="w-full h-full flex flex-col max-h-screen overflow-y-scroll justify-start items-center mx-auto">
        <SearchBar setOpenMenu={setIsMenuOpen} />
        <div className="w-full h-fit p-2.5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
