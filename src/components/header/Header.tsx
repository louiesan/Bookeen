import Logo from "../../assets/book.webp";
import { Loader, Menu, X } from "lucide-react";
import MobileMen from "../mobMenu/MoblieMen";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { initialState } from "../../store/userSlice/user";
import type { storeType } from "../../store/store";
import { Link } from "react-router";

type props = {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: boolean;
};

export default function Header({ setShowSignIn, refresh }: props) {
  const [showMob, setShowMob] = useState<boolean>(false);
  const userState: initialState = useSelector(
    (state: storeType) => state.userSlice
  );

  return (
    <header className="w-full relative h-fit p-2.5 flex justify-between items-center">
      <div className="w-fit h-fit flex flex-row items-center justify-center gap-2.5 cursor-pointer">
        <img className="w-8" src={Logo} alt="Logo_Png" />
        <h1 className="text-3xl sm:text-4xl text-indigo-300 font-[Poppins] font-bold">
          Book
          <span className="font-bold italic text-indigo-200">een</span>
        </h1>
      </div>
      <div className="hidden md:flex w-fit h-fit items-center justify-center gap-5">
        <ul className="w-fit h-full flex flex-row items-center justify-center gap-2.5">
          <a
            href="#Home"
            className={
              "font-medium text-2xl text-rose-100 font-[Noto Sans] hover:text-indigo-300 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
            }
          >
            <li className="">Home</li>
          </a>
          <a
            href="#About"
            className={
              "font-medium text-2xl text-rose-100 font-[Noto Sans] hover:text-indigo-300 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
            }
          >
            <li className="">About</li>
          </a>
          <a
            href="#Contact"
            className={
              "font-medium text-2xl text-rose-100 font-[Noto Sans] hover:text-indigo-300 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-105"
            }
          >
            <li className="">Contact</li>
          </a>
        </ul>
        {!userState.username && !userState.password ? (
          <button
            onClick={() => setShowSignIn((pre) => !pre)}
            className="w-fit py-1 px-1.5 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
          >
            Sign In
          </button>
        ) : (
          <Link
            to={"/mydashboard/discover"}
            className="w-fit flex items-center justify-center py-1 px-1.5 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
          >
            {refresh ? (
              <Loader className="w-fit h-fit text-center animate-spin" />
            ) : (
              "Go to Dashboard"
            )}
          </Link>
        )}
      </div>
      <div className="flex md:hidden items-center justify-center gap-2.5">
        <button
          onClick={() => setShowMob((pre) => !pre)}
          className="w-fit h-fit cursor-pointer text-white"
        >
          {!showMob ? <Menu /> : <X />}
        </button>
        {showMob && <MobileMen />}
        {!userState.username && !userState.password ? (
          <button
            onClick={() => setShowSignIn((pre) => !pre)}
            className="w-fit text-sm p-2.5 mt-2.5 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
          >
            Sign In
          </button>
        ) : (
          <Link
            to={"/mydashboard/discover"}
            className="w-fit flex items-center justify-center py-1 px-1.5 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
          >
            {refresh ? (
              <Loader className="w-fit h-fit text-center animate-spin" />
            ) : (
              "Dashboard"
            )}
          </Link>
        )}
      </div>
    </header>
  );
}
