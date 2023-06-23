import React from "react";
import Link from "next/link";
const links = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-test-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),
  },

  {
    id: 2,
    title: "Profile",
    url: "/profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-test-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "SignIn",
    url: "/signIn",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-test-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "SignUp",
    url: "/signUp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-test-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
    ),
  },
];

const SignIn = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-white  flex  flex-wrap  items-center justify-evenly">
        <div className="w-1/2 h-full    flex justify-center items-center">
          <div className="w-[100%] h-[50%] lg:w-[45%] lg:h-[45%]     flex flex-col   justify-evenly  items-start p-3">
            <div className=" w-full p-2 flex flex-col  justify-around items-start">
              <h2 className="text-test-6 mb-3">
                <b>Sign In</b>
              </h2>
              <p className="text-[12px]  text-test-11">
                Enter your email and password to sign in
              </p>
            </div>
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="w-[100%] py-2 border  rounded-lg  my-2 ps-2"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="w-[100%] py-2 border  rounded-lg  my-1 ps-2"
              />
              <div className="flex my-1">
                <input type="checkbox" name="chec" id="" className="ms-1" />
                <label htmlFor="chec" className="ps-3 text-test-12 text-[10px]">
                  Remember me
                </label>
              </div>
            </div>
            <div className=" w-[100%] ">
              <button
                type="button"
                className="bg-test-1  w-full py-2 text-white rounded-lg"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div
          className=" hidden lg:flex w-[49%] h-[99%] rounded-xl  justify-center items-center   relative"
          style={{
            backgroundImage: `url(${"4.jpg"})`,
          }}
        >
          <div className=" h-[20%] w-[95%] text-white flex justify-center items-center flex-col">
            <h2 className="text-[25px]">"Attention is the new currency"</h2>
            <p>
              The more effortless the writing looks, the more effort the writer
              actually put into the process.
            </p>
          </div>

          <div className="  w-full h-full absolute top-0 right-0"></div>
        </div>
      </div>

      <div className="w-[65%] h-[50px]   bg-slate-50 rounded-xl flex  fixed top-10  left-[17.5%] ">
        <div className="w-[80%] text-[12px] lg:text-[15px]  lg:w-[20%] h-full  flex   justify-start ps-3 lg:ps-0 lg:justify-center items-center">
          <h2 className=" text-test-9   ">Argon Dashboard 2</h2>
        </div>
        <div className=" hidden lg:flex   w-[60%] h-full   justify-center items-center ">
          <ul className=" flex   justify-evenly  items-center   w-[70%] h-full ">
            {links.map((link) => (
              <Link key="link.id" href={link.url} className="flex  w-[100%]  ">
                {link.icon} {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex w-[20%] h-full   justify-center items-center ">
          <button
            type="button"
            className="w-[70%] h-[60%] bg-test-1 rounded-xl text-white"
          >
            Free Download
          </button>
        </div>

        <div className="w-[20%] flex lg:hidden justify-end items-center pe-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SignIn;
