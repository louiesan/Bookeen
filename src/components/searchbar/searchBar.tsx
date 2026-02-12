import { MenuIcon, Search } from "lucide-react";
import book from "../../assets/user.webp";
import { useState, type ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { fetchSearch } from "../../store/bookSlice/bookSlice";
import { useNavigate } from "react-router";

type props = {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

type formType = React.FormEvent<HTMLFormElement> &
  React.MouseEvent<HTMLButtonElement, MouseEvent>;

export default function SearchBar({ setOpenMenu }: props) {
  const userName = useAppSelector((state) => state.userSlice.username);
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };

  function hundleSearch(e: formType) {
    e.preventDefault();
    if (search.length < 3) return;
    dispatch(fetchSearch(search));
    navigate("/mydashboard/discover");
  }

  return (
    <div
      style={style}
      className="w-full h-20 flex flex-row shrink-0 gap-2.5 flex-nowrap justify-between items-center py-1 px-5 bg-white drop-shadow-lg drop-shadow-gray-400/30"
    >
      <button className="flex md:hidden" onClick={() => setOpenMenu(true)}>
        <MenuIcon size={30} className="flex md:hidden cursor-pointer" />
      </button>
      <form
        onSubmit={(e: formType) => hundleSearch(e)}
        className="w-full md:w-96 h-full relative flex items-center "
      >
        <input
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="w-full h-10 pl-6 px-2.5 rounded-md bg-gray-300/50 placeholder:text-gray-600 outline-none"
          type="text"
          name=""
          id=""
          placeholder="Search your book"
        />
        <Search color="#4a5565" size={20} className="absolute left-1" />
        <button
          onClick={(e: formType) => hundleSearch(e)}
          className="absolute w-fit h-fit px-2 py-1.5 rounded-sm cursor-pointer font-semibold  text-white bg-blue-400 right-0.5 hover:text-indigo-400 hover:bg-white transition-all duration-300 ease-in"
        >
          Search
        </button>
      </form>
      <div className="w-fit h-fit flex flex-row flex-nowrap items-center justify-center gap-1.5">
        <div>Mr.{userName?.length! > 6 ? userName?.slice(0, 3) : userName}</div>
        <div className=" w-fit h-fit rounded-full border ">
          <img
            className="hidden md:block w-7 h-7 rounded-full object-cover"
            src={book}
            alt="userPng"
          />
        </div>
      </div>
    </div>
  );
}
