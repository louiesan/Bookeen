import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchBookById } from "../../../store/bookSlice/bookSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../store/storeHooks/index";
import { BookText, Download, Heart, Loader2, Trash } from "lucide-react";
import { addOrRemove } from "../../../store/userSlice/user";
import ChoseModle from "./choosemodle/ChoseModle";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const detailbook = useAppSelector((state) => state.bookSlice.detailedBook);
  const favorites = useAppSelector((state) => state.userSlice.favorites);
  const condition = favorites.findIndex((e) => e.id === parseInt(id as string));
  const detailbookstatus = useAppSelector(
    (state) => state.bookSlice.oneBookStatus,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isDownload, setIsDownload] = useState(false);
  const style = {
    filter: isOpen ? "blur(2px)" : "blur(0px)",
  };
  useEffect(() => {
    dispatch(fetchBookById(id!));
  }, [id]);

  if (detailbookstatus === "rejected") return <div>Error occured</div>;
  if (detailbookstatus === "pending")
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader2 className="animate-spin text-blue-400" size={200} />
      </div>
    );

  return (
    <>
      {isOpen && (
        <ChoseModle
          setIsOpen={setIsOpen}
          isDownload={isDownload}
          book={detailbook!}
        />
      )}
      <div
        style={style}
        className="w-full h-full flex flex-col md:grid md:grid-cols-[200px_1fr] gap-2.5"
      >
        <div className="w-fit h-fit mx-auto flex items-center justify-center bg-transparent drop-shadow-sm drop-shadow-blue-400 backdrop-blur-md">
          <img src={detailbook?.cover_image} alt="book_cover_png" />
        </div>
        <div className="w-full h-fit flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold font-[Poppins] text-center ">
            {detailbook?.title}
          </h1>
          <a
            className="text-xl font-medium text-black font-[Poppins] hover:text-blue-300 cursor-pointer duration-300 ease-in-out"
            target="_blank"
            href={
              detailbook?.authors[0].webpage && detailbook.authors[0].webpage
            }
          >
            {detailbook?.authors[0].name}
          </a>
          <div className="w-full h-fit flex items-center justify-center md:items-start md:justify-start gap-2.5 my-2.5">
            <div
              title="Downloads Counts"
              className="w-fit h-fit flex flex-col items-center justify-center gap-1.5 p-2.5 bg-white/80 rounded-md hover:-translate-y-2.5 duration-500 ease-in-out drop-shadow-lg drop-shadow-blue-400 "
            >
              <h4 className="text-base font-[fredoka] font-medium select-none">
                {detailbook?.download_count}
              </h4>
              <h5 className="text-xl font-semibold font-[Noto sans] select-none">
                Downloads
              </h5>
            </div>
            <div
              title="Reading ease Score"
              className="w-fit h-fit flex flex-col items-center justify-center gap-1.5 p-2.5 bg-white/80 rounded-md hover:-translate-y-2.5 duration-500 ease-in-out drop-shadow-lg drop-shadow-blue-400 "
            >
              <h4 className="text-base font-[fredoka] font-medium select-none">
                {detailbook?.reading_ease_score}%
              </h4>
              <h5 className="text-xl font-semibold font-[Noto sans] select-none">
                RES
              </h5>
            </div>
          </div>
          <div className="mb-2.5 w-full h-fit flex md:items-start md:justify-start items-center justify-center gap-2.5 flex-nowrap">
            <button
              onClick={() => {
                setIsOpen(true);
                setIsDownload(false);
              }}
              className="flex flex-row flex-nowrap gap-1.5 items-center justify-center py-1.5 px-2.5 rounded-md bg-blue-300 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-400 duration-300 ease-in"
            >
              Read Online <BookText />
            </button>
            <button
              onClick={() => {
                setIsOpen(true);
                setIsDownload(true);
              }}
              className="flex flex-row flex-nowrap gap-1.5 items-center justify-center py-1.5 px-2.5 rounded-md bg-indigo-300 text-white font-[Poppins] font-medium cursor-pointer hover:bg-blue-400 duration-300 ease-in"
            >
              Download <Download />
            </button>
          </div>
          {condition !== -1 ? (
            <button
              onClick={() => dispatch(addOrRemove(detailbook))}
              className="group flex flex-row flex-nowrap gap-1.5 items-center justify-center py-1.5 px-2.5 rounded-md bg-red-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-gray-400 duration-300 ease-in"
            >
              Remove from favorites{" "}
              <Trash className="bg-transparent group-hover:text-gray-600 duration-300 ease-in" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addOrRemove(detailbook))}
              className="group flex flex-row flex-nowrap gap-1.5 items-center justify-center py-1.5 px-2.5 rounded-md bg-red-300 text-white font-[Poppins] font-medium cursor-pointer hover:bg-red-400 duration-300 ease-in"
            >
              Add to favorites{" "}
              <Heart className="bg-transparent group-hover:text-red-600 duration-300 ease-in" />
            </button>
          )}
        </div>
        <div className="w-full h-fit col-span-2">
          <div className="w-full h-fit flex flex-col gap-2.5">
            <h2 className="text-2xl font-bold font-[Poppins] text-blue-300">
              Summary:
            </h2>
            <p>{detailbook?.summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}
