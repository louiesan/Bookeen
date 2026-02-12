import { X } from "lucide-react";
import type { Book } from "../../../../store/appStoreTypes";
import { useRef } from "react";
import useOutsideClicker from "../../../../components/useOutside/useOutsideClicker";
import { addDownloads } from "../../../../store/userSlice/user";
import { useAppDispatch } from "../../../../store/storeHooks";

export default function ChoseModle({
  setIsOpen,
  isDownload,
  book,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDownload: Boolean;
  book: Book;
}) {
  const modal = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  useOutsideClicker(modal, () => setIsOpen(false));

  return (
    <div
      ref={modal}
      className={`z-999 animate-modalSlide absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xs h-fit p-2.5 rounded-md border-blue-300 border bg-white/90 duration-300 ease-in-out`}
    >
      <X
        className="absolute top-1 right-1 text-red-400 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />{" "}
      {isDownload ? (
        <div>
          <h2 className="w-full text-center font-bold font-[Poppins]">
            Downloads Type:
          </h2>
          <div className="w-full h-fit grid grid-cols-2 gap-2.5  mt-2.5">
            <a
              onClick={() => {
                addDownloads(book);
                dispatch(addDownloads(book));
              }}
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              href={book.formats["application/epub+zip"]}
            >
              Zip+epub
            </a>
            <a
              onClick={() => {
                addDownloads(book);
                dispatch(addDownloads(book));
              }}
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              href={book.formats["application/rdf+xml"]}
            >
              RDF+XML
            </a>
            <a
              onClick={() => {
                addDownloads(book);
                dispatch(addDownloads(book));
              }}
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              href={book.formats["application/x-mobipocket-ebook"]}
            >
              Xmobipocket
            </a>
            <a
              onClick={() => {
                addDownloads(book);
                dispatch(addDownloads(book));
              }}
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              href={book.formats["application/octet-stream"]}
            >
              Octet-stream
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="w-full text-center font-bold font-[Poppins]">
            Documents Type:
          </h2>
          <div className="w-full h-fit grid grid-cols-2 gap-2.5  mt-2.5">
            <a
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              target="_blank"
              href={book.formats["text/html"]}
            >
              Text/Html
            </a>
            <a
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              target="_blank"
              href={book.formats["text/plain"]}
            >
              Text/Plain
            </a>
            <a
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              target="_blank"
              href={book.formats["text/html; charset=utf-8"]}
            >
              T/H UTF-8
            </a>
            <a
              className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400 text-white font-[Poppins] font-medium cursor-pointer hover:bg-indigo-300 duration-300 ease-in-out justify-self-center"
              target="_blank"
              href={book.formats["text/plain; charset=us-ascii"]}
            >
              T/P US-ASCII
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
