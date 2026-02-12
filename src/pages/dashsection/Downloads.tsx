import { useAppSelector } from "../../store/storeHooks";
import emptyFavoritesImg from "../../assets/book.webp";
import DownloadCard from "../../components/bookCard/DownloadCard";

export default function Downloads() {
  const downloadedBooks = useAppSelector((state) => state.userSlice.downloads);
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };

  return (
    <div style={style} className="w-full h-fit">
      {downloadedBooks && downloadedBooks.length > 0 ? (
        <div>
          <h2 className="text-4xl font-semibold mb-2.5 text-violet-950 bg-transparent drop-shadow-md drop-shadow-red-400">
            You have Downloaded :
          </h2>
          <div className="w-full h-fit grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
            {downloadedBooks.map((e) => (
              <DownloadCard key={e.id} book={e} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-5 mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold  text-violet-950 bg-transparent drop-shadow-md drop-shadow-violet-950">
            You have not Download any book yet.
          </h2>
          <img
            className="w-64 animate-pulse"
            src={emptyFavoritesImg}
            alt="No favorite books"
          />
        </div>
      )}
    </div>
  );
}
