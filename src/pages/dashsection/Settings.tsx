import { Pen } from "lucide-react";
import userPng from "../../assets/user.webp";
import { useAppDispatch, useAppSelector } from "../../store/storeHooks";
import { changeFont } from "../../store/userSlice/user";
import { useState } from "react";
import NameModal from "../../components/modals/NameModal";
import PassModal from "../../components/modals/PasswordModal";

export default function Settings() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.userSlice.username);
  const password = useAppSelector((state) => state.userSlice.password);
  const downloads = useAppSelector((state) => state.userSlice.downloads);
  const favorites = useAppSelector((state) => state.userSlice.favorites);
  const font = useAppSelector((state) => state.userSlice.font);
  const [showNameModal, setNameModal] = useState<boolean>(false);
  const [showPassModal, setPassModal] = useState<boolean>(false);
  const style = {
    fontFamily: font,
    filter: showNameModal || showPassModal ? "blur(2px)" : "blur(0px)",
  };
  return (
    <div>
      {showNameModal ? <NameModal setNameModal={setNameModal} /> : null}
      {showPassModal ? <PassModal setPassModal={setPassModal} /> : null}
      <div style={style} className="relative duration-300 ease-in-out">
        <h1 className="w-fit h-fit text-2xl font-[Noto Sans] font-bold">
          Settings :
        </h1>
        <h4 style={style} className="text-xl font-[Poppins] font-medium my-1.5">
          Personal Setting :
        </h4>
        <div className="w-full h-fit flex flex-row items-center justify-start gap-2.5">
          <div className="w-20 h-20 rounded-full overflow-hidden  border border-black">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={userPng}
              alt="UserPng"
            />
          </div>
          <div
            style={style}
            className="w-fit md:w-full h-fit flex flex-col items-start justify-start"
          >
            <h3 className="text-sm font-medium text-black">Username:</h3>
            <div className="w-fit h-fit flex flex-wrap items-center gap-0.5">
              <h4>{userName}</h4>
              <button
                onClick={() => {
                  setPassModal(false);
                  setNameModal(true);
                }}
                className="cursor-pointer  hover:text-blue-400 duration-300 ease-in"
              >
                <Pen size={17} />
              </button>
            </div>
            <h3 className="text-sm font-medium text-black ">Password:</h3>
            <div className="w-fit h-fit flex flex-wrap items-center gap-0.5">
              <h4>{`●`.repeat(password!.length)}</h4>
              <button
                onClick={() => {
                  setNameModal(false);
                  setPassModal(true);
                }}
                className="cursor-pointer  hover:text-blue-400 duration-300 ease-in"
              >
                <Pen size={17} />
              </button>
            </div>
          </div>
        </div>
        <h4 style={style} className="text-xl font-medium my-1.5">
          Custom Settings :
        </h4>
        <div className="">
          <h4 className="text-lg font-medium text-black mb-2">
            Choose Your font:
          </h4>
          <div className="w-full h-fit flex flex-row flex-wrap md:flex-nowrap items-center justify-start gap-2.5">
            <button
              onClick={() => dispatch(changeFont("Poppins"))}
              className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl font-[Poppins] hover:text-blue-400 duration-300 ease-in cursor-pointer"
            >
              Poppins
            </button>
            <button
              onClick={() => dispatch(changeFont("Fredoka"))}
              className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl font-[Fredoka] hover:text-blue-400 duration-300 ease-in cursor-pointer"
            >
              Fredoka
            </button>
            <button
              onClick={() => dispatch(changeFont("Noto Sans"))}
              className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl font-[Noto Sans] hover:text-blue-400 duration-300 ease-in cursor-pointer"
            >
              Noto Sans
            </button>
            <button
              onClick={() => dispatch(changeFont("sans-serif"))}
              className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl font-[sans-serif] hover:text-blue-400 duration-300 ease-in cursor-pointer"
            >
              sans-serif
            </button>
          </div>
        </div>
        <div style={style} className="">
          <h4 className="text-xl  font-medium my-1.5">Accounts Information:</h4>
          <div className="w-full h-fit flex flex-row flex-wrap gap-2.5">
            <div className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl ">
              <h4>Downloads: {downloads.length}</h4>
            </div>
            <div className="w-fit h-fit p-2.5 rounded-md bg-white/90 backdrop-blur-md drop-shadow-lg drop-shadow-blue-200 text-xl ">
              <h4>Favorites: {favorites.length}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
