import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import bookCollection from "../../assets/booksCollectiont.webp";
import SignIn from "../../components/signinmodal/SignIn";
import type { initialState } from "../../store/userSlice/user";
import type { storeType } from "../../store/store";
import { Loader } from "lucide-react";
import { Link } from "react-router";

export default function MainPage() {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const userState: initialState = useSelector(
    (state: storeType) => state.userSlice,
  );
  const styleSign: React.CSSProperties = {
    filter: showSignIn
      ? "blur(3px) brightness(0.7)"
      : "blur(0px) brightness(1)",
    pointerEvents: showSignIn ? "none" : "auto",
  };

  const service_id = "service_fcii4s3";
  const template_id = "template_c728xuo";
  const public_key = "e-XZWr0BIwIRVcyet";

  const template_params = {
    from_name: name,
    from_email: email,
    message: message,
    to_name: "Bookeen Team",
    title: "Readers Message",
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(
      emailjs
        .send(service_id, template_id, template_params, {
          publicKey: public_key,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        ),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message.",
      },
    );
  };
  return (
    <>
      {showSignIn && (
        <SignIn
          refresh={refresh}
          setRefresh={setRefresh}
          setShowSignIn={setShowSignIn}
        />
      )}
      <div
        style={styleSign}
        className="w-full h-full relative min-h-screen bg-linear-to-r from-gray-800 to-gray-950 transition-all ease-in-out duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <Header refresh={refresh} setShowSignIn={setShowSignIn} />
          {/* HERO SECTION */}
          <div className="w-fit h-fit min-h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="w-fit h-fit flex flex-col items-start justify-center gap-2.5 p-2.5">
              <h2 className="text-center md:text-left text-[2.5rem] font-semibold font-[Sansation] leading-5 text-gray-100">
                Welcome to{" "}
                <span className="text-4xl text-indigo-300 font-[Poppins]">
                  Book
                  <span className="font-bold italic text-indigo-200">een</span>
                </span>
              </h2>

              <p className="text-gray-200 text-base">
                Welcome to the Digital Stacks, your gateway to{" "}
                <span className="text-indigo-300 font-medium">
                  infinite worlds
                </span>
                . Here, every click opens a door: to{" "}
                <span className="font-semibold text-indigo-300 italic">
                  ancient knowledge
                </span>
                , breathtaking adventures,{" "}
                <span className="font-semibold text-indigo-300 italic">
                  groundbreaking ideas
                </span>
                , and{" "}
                <span className="text-indigo-400 font-medium">
                  quiet comfort
                </span>
                .
              </p>

              <p className="text-indigo-300 font-[Karla]">
                What are you waiting for? Sign in and access your dashboard:
              </p>

              {!userState.username || !userState.password ? (
                <button
                  onClick={() => setShowSignIn((pre) => !pre)}
                  className="self-start w-full md:w-40 py-1 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
                >
                  Sign In
                </button>
              ) : (
                <Link
                  to="/mydashboard/discover"
                  className="self-start flex items-center justify-center w-full md:w-40 py-1 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600"
                >
                  {refresh ? (
                    <Loader className="w-fit h-fit text-center animate-spin" />
                  ) : (
                    "Go to Dashboard"
                  )}
                </Link>
              )}
            </div>

            <div className="w-full h-fit p-2.5 overflow-hidden flex flex-col items-center justify-center">
              <div className="relative z-10 w-full h-10 rounded-md bg-gray-900">
                <span className="animate-[spin_2s_linear] absolute top-1/2 left-[18%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-100 rounded-full border border-gray-700"></span>
                <span className="animate-[spin_2s_linear] absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-100 rounded-full border border-gray-700"></span>
                <span className="animate-[spin_2s_linear] absolute top-1/2 left-[46%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-100 rounded-full border border-gray-700"></span>
                <span className="animate-[spin_2s_linear] absolute top-1/2 left-[62%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-100 rounded-full border border-gray-700"></span>
                <span className="animate-[spin_2s_linear] absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-gray-100 rounded-full border border-gray-700"></span>
              </div>

              <div className="w-fit h-full overflow-hidden">
                <img
                  className="relative animate-showDown w-fit transition-all duration-500 ease-in-out"
                  src={bookCollection}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* ABOUT SECTION */}
          <div id="About" className="w-full h-fit flex flex-col p-2.5 gap-2.5">
            <h2 className="text-4xl font-bold font-[Poppins] text-gray-200">
              About Our Library:
            </h2>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-full rounded-md bg-gray-900 shadow-[0_0_5px_-1px] shadow-indigo-300 flex flex-col items-center justify-center gap-2.5 p-2.5"
                >
                  <h3
                    className={`${
                      i === 0
                        ? "drop-shadow-gray-400"
                        : i === 1
                          ? "drop-shadow-blue-400"
                          : "drop-shadow-red-400"
                    } text-4xl text-center bg-transparent drop-shadow-lg`}
                  >
                    {i === 0 ? "🏛️" : i === 1 ? "📖" : "📢"}
                  </h3>
                  <h3 className="text-2xl text-center font-bold text-gray-100 font-[Poppins]">
                    {i === 0
                      ? "Our Purpose"
                      : i === 1
                        ? "Our Service"
                        : "Our Community"}
                  </h3>
                  <p className="text-xs font-[Poppins] font-light text-indigo-200 text-center">
                    {i === 0
                      ? "Our mission is to provide free and equal access to information."
                      : i === 1
                        ? "We offer a vast collection of books and community programs."
                        : "Our passionate staff and trustees work tirelessly to serve you."}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* CONTACT SECTION */}
          <div
            id="Contact"
            className="w-full p-2.5 grid grid-cols-1 md:grid-cols-2 gap-2.5"
          >
            <div className="w-full p-2.5 bg-gray-900 rounded-md shadow shadow-indigo-300">
              <form onSubmit={sendEmail} className="flex flex-col items-start">
                <h2 className="text-indigo-300 font-[Poppins] font-bold text-2xl">
                  Have any questions?
                </h2>

                <label
                  className="text-indigo-300 font-[Poppins] font-medium text-lg"
                  htmlFor="Name"
                >
                  Full Name
                </label>
                <input
                  id="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full border outline outline-indigo-400 text-gray-300 font-[Karla] rounded-sm p-1.5 bg-gray-800"
                  placeholder="Enter Your Name"
                />

                <label
                  className="text-indigo-300 font-[Poppins] font-medium text-lg"
                  htmlFor="Email"
                >
                  Email Address
                </label>
                <input
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border outline outline-indigo-400 text-gray-300 font-[Karla] rounded-sm p-1.5 bg-gray-800"
                  placeholder="Enter Your Email"
                />

                <label
                  className="text-indigo-300 font-[Poppins] font-medium text-lg"
                  htmlFor="Message"
                >
                  Your Message
                </label>
                <textarea
                  rows={4}
                  id="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border outline outline-indigo-400 text-gray-300 font-[Karla] rounded-sm p-1.5 bg-gray-800"
                  placeholder="Enter Your Message"
                ></textarea>

                <button className="w-fit p-2.5 mt-2.5 rounded-md bg-indigo-700 text-gray-100 font-[Poppins] cursor-pointer hover:bg-indigo-600">
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col items-start justify-start gap-2.5">
              <p className="w-full animate-pulse flex flex-col text-gray-300 text-lg font-[Karla] text-center rounded-md bg-gray-900 shadow-[0_0_5px_-1px] shadow-indigo-300 p-2.5">
                <q className="text-indigo-300"> We’re always here to help.</q>{" "}
                Whether you’re exploring new books, facing an issue, or just
                curious about our services — reach out anytime. Your journey
                matters to us.
              </p>
              <p className="w-full animate-pulse flex flex-col text-gray-300 text-lg font-[Karla] text-center rounded-md bg-gray-900 shadow-[0_0_5px_-1px] shadow-indigo-300 p-2.5">
                <q className="text-indigo-300"> Your Voice is Important!</q>{" "}
                Your voice helps shape our digital library. Contact us with any
                questions or ideas — we read every message.
              </p>
              <p className="w-full animate-pulse flex flex-col text-gray-300 text-base font-[Karla] text-center rounded-md bg-gray-900 shadow-[0_0_5px_-1px] shadow-indigo-300 p-2.5">
                <q className="text-indigo-300">Don’t hesitate to ask</q> Your
                Every great story begins with a question. We’d love to help you
                turn the page to your next chapter.
              </p>
            </div>
          </div>
          {/* FOOTER SECTION */}
          <footer className="w-full h-fit p-2.5">
            <div className="w-full h-1 rounded-md bg-indigo-300 drop-shadow-xs drop-shadow-indigo-300"></div>
            <h2 className="text-center font-bold text-xl mt-2 text-indigo-50">
              All Right Reserved for our{" "}
              <span className="text-lg text-indigo-300 font-[Poppins]">
                Leen
                <span className="font-bold italic text-indigo-200">Brary</span>
              </span>{" "}
              © 2027
            </h2>
          </footer>
        </div>
      </div>
    </>
  );
}
