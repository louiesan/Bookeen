import { X } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { changeName } from "../../store/userSlice/user";

export default function NameModal({
  setNameModal,
}: {
  setNameModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [username, setUsername] = useState<string>("");
  const font = useAppSelector((state) => state.userSlice.font);
  const style = {
    fontFamily: font,
  };
  const dispatch = useAppDispatch();
  return (
    <div
      style={style}
      className="animate-show flex flex-col z-999 p-2.5 gap-2.5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xs h-fit bg-white/90 rounded-md backdrop-blur-lg drop-shadow-lg drop-shadow-blue-200"
    >
      <div className="flex justify-between items-center p-2.5">
        <h2 className="text-xl font-bold">Change the username:</h2>
        <button onClick={() => setNameModal(false)}>
          <X className="cursor-pointer" size={20} />
        </button>
      </div>
      <input
        className="w-full h-fit p-0.5 rounded-sm border-2 border-blue-300 "
        type="text"
        placeholder="new username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(changeName(username));
          setNameModal(false);
        }}
        className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400/90 text-white cursor-pointer"
      >
        Confirm
      </button>
    </div>
  );
}
