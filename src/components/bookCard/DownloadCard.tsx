import { Heart } from "lucide-react";
import type { Book } from "../../store/appStoreTypes";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { addOrRemove } from "../../store/userSlice/user";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function DownloadCard({ book }: { book: Book }) {
  const dispatch = useAppDispatch();
  const userFav = useAppSelector((state) => state.userSlice.favorites);
  const index = userFav?.findIndex((e) => e.id === book.id);
  const navigate = useNavigate();
  const notify = () =>
    index === -1
      ? toast.success("Succefully added", { duration: 2000 })
      : toast("removed from favorites", {
          icon: "🗑️",
          duration: 2000,
        });

  console.log(index);

  return (
    <div className="bg-[#eee] w-59 xs:w-full justify-self-center py-2.5 h-full flex flex-col gap-2.5 items-center rounded-md drop-shadow-lg drop-shadow-blue-950/60 ">
      <img
        className="w-40 h-60 rounded-md drop-shadow-md drop-shadow-black/60"
        src={book.cover_image}
        alt="book_cover"
      />
      <h1 className="text-lg text-center font-bold font-[Poppins] text-violet-950 px-2 sm:px-2.5">
        {book.title.length > 18 ? `${book.title.slice(0, 18)}...` : book.title}
      </h1>
      <p className="text-sm text-center text-gray-600 font-[Noto Sans] font-medium px-2.5">
        {book.authors[0]?.name
          ? book.authors[0].name.length > 15
            ? `${book.authors[0].name.slice(0, 15)}...`
            : book.authors[0].name
          : "Unknown Author"}
      </p>
      <div>
        <h2 className="text-lg text-black font-medium font-[Noto Sans]">
          Download At:{" "}
          <span className="italic underline">{book.downloadedAt}</span>
        </h2>
      </div>
      <div className="w-full h-fit flex flex-row flex-nowrap items-center justify-between px-2.5">
        <button
          onClick={() => navigate(`../bookno/${book.id}`)}
          className="w-fit h-fit px-1.5 py-1 bg-blue-400/80 rounded-sm font-[Noto Sans] font-medium text-lg text-white drop-shadow-md drop-shadow-gray-400/50 hover:bg-white hover:text-indigo-400 transition-all duration-300 ease-in-out cursor-pointer"
        >
          Learn More
        </button>

        <button
          onClick={() => {
            dispatch(addOrRemove(book));
            notify();
          }}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer drop-shadow-md drop-shadow-gray-400/50"
        >
          <Heart
            fill={`${index !== -1 ? "red" : "transparent"}`}
            size={20}
            color="#c1121f"
          />
        </button>
      </div>
    </div>
  );
}
