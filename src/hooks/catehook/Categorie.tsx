import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { fetchCategory } from "../../store/bookSlice/bookSlice";
import { Loader2 } from "lucide-react";
import BookCard from "../../components/bookCard/BookCard";

export default function CategoryPage({ showMin }: { showMin: boolean }) {
  const [filter, setFilter] = useState<string>("All");
  const dispatch = useAppDispatch();
  const catBooks = useAppSelector((state) => state.bookSlice.categoryBooks);
  const status = useAppSelector((state) => state.bookSlice.status);

  const categoriesLists = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Children",
    "Poetry",
    "Romance",
    "Mystery",
    "Adventure",
    "History",
    "Drama",
    "Fantasy",
  ];

  useEffect(() => {
    if (!catBooks) dispatch(fetchCategory(filter));
  }, [catBooks]);

  return (
    <div className="w-full h-fit flex flex-col gap-5">
      <div className="w-full h-fit flex flex-row items-center justify-between flex-wrap gap-2.5">
        {categoriesLists && categoriesLists.length > 0
          ? categoriesLists.map((e, i) =>
              i < 8 && !showMin ? (
                <button
                  key={i}
                  onClick={() => {
                    dispatch(fetchCategory(e));
                    setFilter(e);
                  }}
                  className={`w-fit h-fit px-2 py-1 rounded-sm bg-blue-400 ${
                    filter === e
                      ? "text-blue-400 bg-white"
                      : "text-white bg-blue-400"
                  } drop-shadow-md drop-shadow-gray-600/80 hover:bg-white hover:text-blue-400 transition-all duration-300 ease-in-out font-medium font-[Poppins] cursor-pointer`}
                >
                  {e}
                </button>
              ) : showMin ? (
                <button
                  onClick={() => setFilter(e)}
                  className={`w-fit h-fit px-2 py-1 rounded-sm bg-blue-400 ${
                    filter === e
                      ? "text-blue-400 bg-white"
                      : "text-white bg-blue-400"
                  } drop-shadow-md drop-shadow-gray-600/80 hover:bg-white hover:text-blue-400 transition-all duration-300 ease-in-out font-medium font-[Poppins] cursor-pointer`}
                >
                  {e}
                </button>
              ) : null
            )
          : null}
      </div>
      <div className="w-full h-fit grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
        {status === "pending" ? (
          <div className="w-full h-full flex items-center justify-center animate-pulse col-span-4">
            <Loader2 className="animate-spin text-blue-400" size={200} />
          </div>
        ) : catBooks && catBooks.length > 0 ? (
          catBooks.map((e) => <BookCard key={e.id} book={e} />)
        ) : (
          "NO BOOKS FOUND"
        )}
      </div>
    </div>
  );
}
