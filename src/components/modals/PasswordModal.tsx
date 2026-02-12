import { Eye, EyeClosed, X } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { changePassword } from "../../store/userSlice/user";

export default function PassModal({
  setPassModal,
}: {
  setPassModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [password, setPassword] = useState<string>("");
  const [showpass, setshowpass] = useState<boolean>(false);
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
        <h2 className="text-xl font-bold">Change the Password:</h2>
        <button onClick={() => setPassModal(false)}>
          <X className="cursor-pointer" size={20} />
        </button>
      </div>
      <div className="relative w-full h-full">
        <input
          className="w-full h-fit p-0.5 rounded-sm border-2 border-blue-300 "
          type={showpass ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => setshowpass((pre) => !pre)}
          className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          {!showpass ? <Eye size={20} /> : <EyeClosed size={20} />}
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(changePassword(password));
          setPassModal(false);
        }}
        className="w-fit h-fit px-2.5 py-1.5 rounded-md bg-blue-400/90 text-white cursor-pointer"
      >
        Confirm
      </button>
    </div>
  );
}
