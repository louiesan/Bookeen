import { useState } from "react";
import { useAppSelector } from "../../store/storeHooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "../../components/bookCard/BookCard";

export default function BookPage({ isSeeAll }: { isSeeAll?: boolean }) {
  const [count, setCount] = useState<number>(0);
  const books = useAppSelector((state) => state.bookSlice.recomendedBook);
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };

  return (
    <div
      style={style}
      className="flex flex-col items-center justify-center gap-5 p-2.5"
    >
      <div className="w-full h-fit grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
        {books && books.length > 0 && !isSeeAll
          ? books.map((e, i) =>
              i < count + 8 && i >= count ? (
                <BookCard key={i} book={e} />
              ) : null,
            )
          : books && books.length > 0 && isSeeAll
            ? books.map((e) => <BookCard book={e} />)
            : null}
      </div>
      {!isSeeAll ? (
        <div className="w-full h-fit flex flex-nowrap items-center justify-between">
          <button
            className="w-fit h-fit px-1.5 py-1 rounded-sm flex flex-nowrap items-center justify-center cursor-pointer bg-[#6930c3] text-white font-medium font-[Karla]"
            onClick={() => setCount((pre) => (pre !== 0 ? pre - 8 : 24))}
          >
            <ChevronLeft size={20} />
            Prev
          </button>
          <div className="w-full h-fit flex flex-row flex-nowrap items-center justify-center gap-2.5">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                onClick={() => setCount(i * 8)}
                className={`${
                  (count + 8) / 8 === i + 1
                    ? "text-white bg-[#6930c3]"
                    : "bg-blue-400/80 text-white"
                } w-7 h-7 rounded-full  flex items-center justify-center cursor-pointer font-[fredoka] font-semibold transition-all duration-300 ease-in-out`}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <button
            className="w-fit h-fit px-1.5 py-1 rounded-sm flex flex-nowrap items-center justify-center cursor-pointer bg-[#6930c3] text-white font-medium font-[Karla]"
            onClick={() =>
              setCount((pre) => (pre + 8 !== books?.length ? pre + 8 : 0))
            }
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
