import BookCard from "../../components/bookCard/BookCard";
import { useAppSelector } from "../../store/storeHooks";
import emptyFavoritesImg from "../../assets/favorite-book.webp";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.userSlice.favorites);
  return (
    <div className="w-full h-fit">
      {favorites && favorites.length > 0 ? (
        <div>
          <h2 className="text-4xl font-semibold font-[Poppins] text-violet-950 bg-transparent drop-shadow-md drop-shadow-red-400">
            Favorites :
          </h2>
          <div className="w-full h-fit grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-5">
            {favorites.map((e) => (
              <BookCard key={e.id} book={e} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col justify-center items-center gap-5 mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold font-[Poppins] text-violet-950 bg-transparent drop-shadow-md drop-shadow-violet-950">
            You have no favorite books yet.
          </h2>
          <img
            className="w-64 animate-bounce mt-10"
            src={emptyFavoritesImg}
            alt="No favorite books"
          />
        </div>
      )}
    </div>
  );
}
