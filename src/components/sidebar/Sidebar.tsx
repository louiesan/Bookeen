import {
  Download,
  Heart,
  Home,
  LogOut,
  PanelLeftClose,
  Settings,
  SquareLibrary,
} from "lucide-react";
import logo from "../../assets/book.webp";
import { NavLink } from "react-router";
import { useRef } from "react";
import useOutsideClicker from "../useOutside/useOutsideClicker";

type props = {
  isMenuOpen: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ isMenuOpen, setOpenMenu }: props) {
  const style = {
    left: isMenuOpen ? "0%" : "-100%",
  };

  const menu = useRef(null);
  useOutsideClicker(menu, () => setOpenMenu(false));
  return (
    <>
      <div className="hidden md:flex z-99 w-65 min-h-screen h-full bg-white flex-col items-center drop-shadow-lg drop-shadow-gray-400/30 justify-start gap-10 py-2.5">
        <div className=" flex flex-row items-center justify-center flex-nowrap gap-1">
          <img className="w-7" src={logo} alt="logo" />
          <h1 className="font-bold font-[Noto Sans]  text-gray-950 text-3xl">
            Book
            <span className="font-[fredoka] font-medium text-gray-900">
              een
            </span>
          </h1>
        </div>

        <ul className="w-full h-fit flex flex-col items-center justify-center gap-2.5 my-1">
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"discover"}
            >
              <Home size={20} /> Discover
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"category"}
            >
              <SquareLibrary size={20} />
              Category
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"downloads"}
            >
              <Download size={20} />
              Downloads
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"favorites"}
            >
              <Heart size={20} />
              Favorites
            </NavLink>
          </li>
        </ul>
        <hr className="h-0.5 w-[90%] rounded-full bg-gray-200" />
        <ul className="w-full h-fit flex flex-col items-center justify-center gap-2.5 my-1">
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"settings"}
            >
              <Settings size={20} /> Settings
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <button
              className={
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
            >
              <LogOut size={20} />
              Log out
            </button>
          </li>
        </ul>
      </div>

      <div
        ref={menu}
        style={style}
        className="flex flex-col items-center gap-2.5 py-2.5 h-full md:hidden absolute top-0 z-99 w-64 bg-white/90 drop-shadow-gray-400 drop-shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out text-white"
      >
        <button
          onClick={() => setOpenMenu(false)}
          className="flex md:hidden absolute top-5 right-2.5 text-black cursor-pointer"
        >
          <PanelLeftClose size={25} />
        </button>
        <div className=" flex flex-row items-center justify-center flex-nowrap gap-1">
          <img className="w-7" src={logo} alt="logo" />
          <h1 className="font-bold font-[Noto Sans]  text-gray-950 text-3xl">
            Book
            <span className="font-[fredoka] font-medium text-gray-900">
              een
            </span>
          </h1>
        </div>
        <ul className="w-full h-fit flex flex-col items-center justify-center gap-2.5 my-1">
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"discover"}
            >
              <Home size={20} /> Discover
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"category"}
            >
              <SquareLibrary size={20} />
              Category
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"downloads"}
            >
              <Download size={20} />
              Downloads
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"favorites"}
            >
              <Heart size={20} />
              Favorites
            </NavLink>
          </li>
        </ul>
        <hr className="h-0.5 w-[90%] rounded-full bg-gray-200 opacity-50" />
        <ul className="w-full h-fit flex flex-col items-center justify-center gap-2.5 my-1">
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <NavLink
              className={({ isActive }: { isActive: boolean }) =>
                (isActive
                  ? "text-blue-800 font-bold font-[fredoka]"
                  : "text-black font-medium") +
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
              to={"settings"}
            >
              <Settings size={20} /> Settings
            </NavLink>
          </li>
          <li className="w-40 bg-gray-200 px-2 py-1.5 rounded-md ">
            <button
              className={
                "w-fit h-full font-[fredoka] flex flex-nowrap items-center justify-start gap-1 hover:translate-x-1.5 hover:text-indigo-400 mx-auto transition-all duration-300 ease-in-out"
              }
            >
              <LogOut size={20} />
              Log out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
