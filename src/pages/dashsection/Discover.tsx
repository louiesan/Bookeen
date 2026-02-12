import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { ChevronRight, Loader2 } from "lucide-react";
import { fetchRecomended } from "../../store/bookSlice/bookSlice";
import { useEffect, useState } from "react";
import BookPage from "../../hooks/bookpage/BookPage";
import BookCard from "../../components/bookCard/BookCard";

export default function Discover() {
  const books = useAppSelector((state) => state.bookSlice);
  const [isSeeAll, setIsSeeAll] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };

  useEffect(() => {
    if (!books.recomendedBook) dispatch(fetchRecomended());
  }, [books.recomendedBook]);
  console.log(books.searchStatus);

  if (books.status === "pending" || books.searchStatus === "pending")
    return (
      <div className="w-full h-full flex items-center justify-center animate-pulse col-span-4">
        <Loader2 className="animate-spin text-blue-400" size={200} />
      </div>
    );
  return (
    <div style={style} className="w-full h-fit flex flex-col gap-2.5">
      {books.Searchedbooks && books.Searchedbooks.length > 0 ? (
        <div className="w-full h-fit max-w-5xl bg-white rounded-md drop-shadow-lg drop-shadow-gray-400/50 px-2.5 py-1.5">
          <h2 className="text-2xl font-semibold text-indigo-950">
            You're Results :
          </h2>
          <div className="w-full h-fit grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
            {books.Searchedbooks.map((e) => (
              <BookCard book={e} />
            ))}
          </div>{" "}
        </div>
      ) : books.searchStatus === "success" ? (
        "Sorry WE DID NOT FIND ANYTHING"
      ) : null}
      <div className="w-full h-fit max-w-5xl bg-white rounded-md drop-shadow-lg drop-shadow-gray-400/50 px-2.5 py-1.5">
        <div className="w-full h-fit flex flex-nowrap items-center justify-between">
          <h2 className="text-2xl font-semibold  text-indigo-950">
            Recommended
          </h2>
          <button
            onClick={() => setIsSeeAll((pre) => !pre)}
            className="w-fit h-fit px-2.5 py-1.5 flex flex-nowrap items-center justify-center gap-1 font-medium font-[Noto Sans] cursor-pointer bg-blue-400/80 rounded-sm text-white drop-shadow-md drop-shadow-indigo-200/80"
          >
            {isSeeAll ? (
              <>Pages</>
            ) : (
              <>
                See All <ChevronRight size={20} />
              </>
            )}
          </button>
        </div>
        <div>
          <BookPage isSeeAll={isSeeAll} />
        </div>
      </div>
    </div>
  );
}
