import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SignIN } from "../../store/userSlice/user";
import { Loader } from "lucide-react";
export default function SignIn({
  setShowSignIn,
  refresh,
  setRefresh,
}: {
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  type SIGNINTYPE = HTMLElement & {
    username: HTMLInputElement;
    password: HTMLInputElement;
    checkbox: HTMLInputElement;
  };

  function hundleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as SIGNINTYPE;
    if (form.checkbox.checked) {
      dispatch(
        SignIN({
          username: form.username.value,
          password: form.password.value,
        })
      );
      setRefresh(true);
    }
  }

  useEffect(() => {
    if (!refresh) return;
    console.log("WORKING....");
    const id = setTimeout(() => {
      setShowSignIn((pre) => !pre);
      setRefresh(false);
    }, 2000);
    return () => clearTimeout(id);
  }, [refresh]);

  return (
    <div className="animate-show absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-99 w-xs h-96 rounded-md bg-gray-900 shadow-[0_0_5px_-1px] shadow-indigo-300 flex flex-col items-center justify-around gap-2.5 p-2.5">
      <div>
        <h1 className="text-4xl text-indigo-300 font-[Poppins] font-bold">
          Leen
          <span className="font-bold italic text-indigo-200">Brary</span>
        </h1>
        <h2 className="text-center text-2xl font-bold font-[Poppins] bg-transparent drop-shadow-indigo-400 drop-shadow-md text-white">
          Sign In:
        </h2>
      </div>
      <form
        onSubmit={(e) => hundleSubmit(e)}
        className="w-full h-full flex flex-col items-start justify-around"
      >
        <div>
          <label
            className=" text-xl text-white font-medium font-[Poppins] bg-transparent drop-shadow-sm drop-shadow-indigo-400"
            htmlFor="username"
          >
            Enter Username:
          </label>
          <input
            id="username"
            type="text"
            className="w-full border outline outline-indigo-400 text-gray-300 font-[Karla] rounded-sm p-1.5 bg-gray-800"
            placeholder="Enter Your Username"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mt-2.5 text-xl text-white font-medium font-[Poppins] bg-transparent drop-shadow-sm drop-shadow-indigo-400"
          >
            Enter Password:
          </label>
          <input
            id="password"
            type="password"
            className="w-full border outline outline-indigo-400 text-gray-300 font-[Karla] rounded-sm p-1.5 bg-gray-800"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="w-full h-fit flex flex-row flex-nowrap items-center justify-start gap-1.5">
          <input
            onChange={(e) => setIsChecked(e.target.checked)}
            id="checkbox"
            className="w-5 h-5 cursor-pointer"
            type="checkbox"
          />
          <p className="text-white drop-shadow-md drop-shadow-indigo-600 font-[Karla] text-base font-medium">
            you don't need a real infos
          </p>
        </div>
        <div className="w-full h-fit flex flex-nowrap items-center justify-center gap-2.5">
          <button
            className={`${
              isChecked
                ? "opacity-100 cursor-pointer pointer-events-auto"
                : "cursor-none opacity-50 pointer-events-none"
            } w-full px-1.5 py-1 flex items-center justify-center rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600`}
          >
            {refresh ? (
              <Loader className="w-fit h-fit text-center animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
          <button
            style={{
              pointerEvents: refresh ? "none" : "auto",
              opacity: refresh ? "0.5" : "1",
            }}
            onClick={() => setShowSignIn((pre) => !pre)}
            className="w-full px-1.5 py-1 rounded-md bg-red-400 text-gray-100 font-[Poppins] cursor-pointer hover:bg-red-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
