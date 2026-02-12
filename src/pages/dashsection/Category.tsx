import { ListFilterPlus, ListRestart } from "lucide-react";
import CategoryPage from "../../hooks/catehook/Categorie";
import { useAppSelector } from "../../store/storeHooks";
import { useState } from "react";

export default function Category() {
  const [showMin, setShowMin] = useState<boolean>(false);
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };
  return (
    <div
      style={style}
      className="w-full h-fit max-w-5xl flex flex-col gap-2.5 bg-white rounded-md drop-shadow-lg drop-shadow-gray-400/50 px-2.5 py-1.5"
    >
      <div className="w-full h-fit flex flex-nowrap items-center justify-between">
        {" "}
        <h2 className="text-2xl font-semibold font-[Poppins] text-indigo-950">
          Categories
        </h2>
        <button
          onClick={() => setShowMin((pre) => !pre)}
          className="w-fit h-fit px-2.5 py-1.5 flex flex-nowrap items-center justify-center gap-1 font-medium font-[Noto Sans] cursor-pointer bg-blue-400/80 rounded-sm text-white drop-shadow-md drop-shadow-indigo-200/80"
        >
          {!showMin ? <ListFilterPlus /> : <ListRestart />}
        </button>
      </div>
      <CategoryPage showMin={showMin} />
    </div>
  );
}
