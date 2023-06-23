import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const signIN = [
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
];

const SignUp = () => {
  return (
    <>
      <section className="w-[100%] h-[100vh] bg-white  flex    flex-col">
        <div
          className="w-[98%] h-[500px] mx-auto mt-2 rounded-lg flex flex-col  items-center relative"
          style={{
            backgroundImage: `url(${"5.jpg"})`,
            backgroundClip: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-[65%] h-[50px]   rounded-xl flex  fixed top-10  left-[17.5%] ">
            <div className="w-[80%] text-[12px] lg:text-[15px]  lg:w-[20%] h-full  flex   justify-start ps-3 lg:ps-0 lg:justify-center items-center">
              <h2 className=" text-test-9 p-1  border-2 border-white outline   outline-test-1 rounded-lg">
                Argon Dashboard 2
              </h2>
            </div>
            <div className=" hidden lg:flex   w-[60%] h-full   justify-center items-center ">
              <ul className=" flex  text-white justify-evenly  items-center   w-[70%] h-full ">
                {links.map((link) => (
                  <Link
                    key="link.id"
                    href={link.url}
                    className="flex  w-[100%]  "
                  >
                    {link.icon} {link.title}
                  </Link>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex w-[20%] h-full   justify-center items-center ">
              <button
                type="button"
                className="w-[70%] h-[80%] bg-white rounded-xl text-test-1"
              >
                Free Download
              </button>
            </div>

            <div className="w-[20%] flex lg:hidden justify-end items-center pe-2 text-white">
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

          <div className="w-[90%] lg:w-[40%] h-[30%] mt-[170px] lg:mt-[80px]  flex flex-col justify-center items-center text-white">
            <h1 className="text-[55px]">Welcome!</h1>
            <p className="w-[70%] text-center">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </div>

        <div
          className=" w-[90%]  sm:w-[40%]  md:w-[25%] lg:w-[22%] h-[550px]  absolute top-[400px]  lg:top-[300px]  left-[5%] sm:left-[30%] md:left-[37.5%]   lg:left-[38%]  bg-white   rounded-xl 
         shadow-lg  shadow-gray-300 
        
        "
        >
          <div className="w-full h-[35%]    p-2 flex flex-col   justify-around items-center">
            <h1 className="text-center text-[25px]">Register with</h1>

            <div className="flex justify-center  w-full h-full items-center ">
              <div className="w-30% h-[50%]  mx-2 border flex justify-center items-center rounded-lg">
                <Image src="/6.png" width={50} height={50} />
              </div>
              <div className="w-30% h-[50%]  mx-2 border  flex justify-center items-center rounded-lg">
                <Image src="/7.png" width={50} height={50} />
              </div>
              <div className="w-30% h-[50%]  mx-2 border flex justify-center items-center  rounded-lg">
                <Image src="/8.png" width={50} height={50} />
              </div>
            </div>

            <div>
              <h2 className=" text-test-11">or</h2>
            </div>
          </div>

          <div className="w-full h-[45%]   p-2">
            <input
              type="name"
              name=""
              id=""
              placeholder="Name"
              className="w-[100%] py-2 border  rounded-lg  my-2 ps-2"
            />

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
              className="w-[100%] py-2 border  rounded-lg  my-2 ps-2"
            />

            <div className="flex my-1">
              <input type="checkbox" name="chec" id="" className="ms-1" />
              <label htmlFor="chec" className="ps-3 text-test-12 text-[10px]">
                I agree the <b>Terms and Conditions</b>
              </label>
            </div>
          </div>
          <div className="w-full h-[20%]     flex flex-col   justify-around items-center p-2">
            <div className=" w-[100%] ">
              <button
                type="button"
                className="bg-test-1  w-full py-2 text-white rounded-lg"
              >
                Sign Up
              </button>
            </div>

            <div>
              {signIN.map((val, i) => {
                return (
                  <p key={i}>
                    Already have an account? <Link href={val.url}>Sign in</Link>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
