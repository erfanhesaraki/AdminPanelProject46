"use clinet";
import React from "react";
import Image from "next/image";

const Data = [
  {
    Image: "/11.jpg",
    Name: " John Michael",
    Email: "ohn@creative-tim.com",
    F1: "Manager",
    F2: "Organization",
    Status: "ONLINE",
    Employed: "23/04/18",
    text: "Edit",
  },
  {
    Image: "/9.jpg",
    Name: " Alexa Liras",
    Email: "alexa@creative-tim.com",
    F1: "Programator",
    F2: "Developer",
    Status: "OFFLINE",
    Employed: "11/01/19",
    text: "Edit",
  },
  {
    Image: "/10.jpg",
    Name: "Laurent Perrier ",
    Email: "laurent@creative-tim.com",
    F1: "Executive",
    F2: "Projects",
    Status: "ONLINE",
    Employed: "19/09/17",
    text: "Edit",
  },
  {
    Image: "/9.jpg",
    Name: " Michael Levi",
    Email: "michael@creative-tim.com",
    F1: "Programator",
    F2: "Developer",
    Status: "ONLINE",
    Employed: "24/12/08",
    text: "Edit",
  },
  {
    Image: "/11.jpg",
    Name: "Richard Gran ",
    Email: "richard@creative-tim.com",
    F1: "Manager",
    F2: "Executive",
    Status: "OFFLINE",
    Employed: "04/10/21",
    text: "Edit",
  },
  {
    Image: "/10.jpg",
    Name: "Miriam Eric ",
    Email: "miriam@creative-tim.com",
    F1: "Programtor",
    F2: "Developer",
    Status: "OFFLINE",
    Employed: "14/09/20",
    text: "Edit",
  },
];
const apps = [
  {
    image: "/12.png",
    project: "Spotify",
    budget: "$2,500",
    status: "working",
    completion: "60",
    bg: "",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
  {
    image: "/13.png",
    project: "Invision",
    budget: "$5,000",
    status: "done",
    completion: "100",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
  {
    image: "/14.png",
    project: "Jira",
    budget: "$3,400",
    status: "canceled",
    completion: "30",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
  {
    image: "/15.png",
    project: "Slack",
    budget: "$1,000",
    status: "canceled",
    completion: "0",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
  {
    image: "/16.png",
    project: "Webdev",
    budget: "$14,000",
    status: "working",
    completion: "80",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
  {
    image: "/17.png",
    project: "Adobe XD",
    budget: "$2,300",
    status: "done",
    completion: "100",
    svg: (
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
          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
        />
      </svg>
    ),
  },
];
function Tables() {
  return (
    <main className="w-[100%]  lg:ps-[270px]    flex flex-col flex-wrap mb-[80px] lg:mb-[50px] ">
      <div className="w-[95%] bg-white rounded-lg mx-auto my-5 h-[500px] border flex flex-col ">
        <div className="w-full h-[10%] mb-3">
          <div className="w-full  flex ">
            <h1 className="px-2 text-[20px] text-test-9">Authors table</h1>
          </div>

          <div className="w-full  flex    ">
            <span className="w-[50%] lg:w-[40%]  py-1 flex justify-center lg:justify-start  items-center text-test-11  p-1">
              AUTHOR
            </span>
            <span className="w-[50%] lg:w-[20%]  py-1 flex justify-center lg:justify-start  items-center text-test-11  p-1">
              FUNCTION
            </span>
            <span className=" hidden lg:flex w-[20%]  py-1 justify-start  items-center text-test-11  p-1">
              STATUS
            </span>
            <span className=" hidden lg:flex w-[20%]  py-1 justify-start  items-center text-test-11  p-1">
              EMPLOYED
            </span>
          </div>
        </div>

        <ul className="w-full h-[90%] flex-wrap  ">
          {Data.map((val, i) => {
            return (
              <li className="w-full  flex items-center  p-1 h-[16.66%] border-t-2 flex-wrap">
                <span className=" flex w-[50%] lg:w-[40%]  py-1     p-1  justify-center lg:justify-start items-center  ">
                  <Image
                    src={val.Image}
                    width={40}
                    height={40}
                    className="hidden lg:flex rounded-2xl me-3"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-test-9">{val.Name}</h6>
                    <p className="hidden lg:flex text-test-11">{val.Email}</p>
                  </div>
                </span>
                <span className="w-[50%] lg:w-[20%]  py-1 flex   justify-center lg:justify-start p-1">
                  <div className="flex flex-col">
                    <h6 className="text-test-9">{val.F1}</h6>
                    <p className="text-test-11">{val.F2}</p>
                  </div>
                </span>
                <strong className="hidden lg:flex w-[100%] lg:w-[20%]  py-1  p-1 text-black  ">
                  <div
                    className={
                      val.Status === "ONLINE"
                        ? "w-[70px] rounded  flex  justify-center  text-white bg-green-300 "
                        : val.Status == "OFFLINE"
                        ? "w-[70px] rounded  flex  justify-center  text-white bg-gray-300"
                        : "bg-yellow-400"
                    }
                  >
                    {val.Status}
                  </div>
                </strong>

                <span className="hidden lg:flex w-[100%] lg:w-[20%]  py-1   justify-between   p-1 pe-3">
                  <span>{val.Employed}</span> <span>{val.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* **************** */}

      <div className="w-[95%] bg-white rounded-lg mx-auto my-5 h-[500px] border flex flex-col p-3">
        <div className="w-full h-[10%] mb-3">
          <div className="w-full  flex ">
            <h1 className="text-[20px] text-test-9">Projects table</h1>
          </div>

          <div className="w-full  flex    ">
            <span className="w-[50%] lg:w-[30%]  py-1 flex justify-center lg:justify-start  items-center text-test-11  p-1">
              PROJECT
            </span>
            <span className="w-[50%] lg:w-[20%]  py-1 flex justify-center lg:justify-start  items-center text-test-11  p-1">
              BUDGET
            </span>
            <span className=" hidden lg:flex w-[20%]  py-1 justify-start  items-center text-test-11  p-1">
              STATUS
            </span>
            <span className=" hidden lg:flex w-[30%]  py-1 justify-start  items-center text-test-11  p-1">
              COMPLETION
            </span>
          </div>
        </div>

        <ul className="w-full h-[90%] flex-wrap  ">
          {apps.map((val, i) => {
            return (
              <li className="w-full  flex items-center  p-1 h-[16.66%] border-t-2 flex-wrap">
                <span className="w-[50%] lg:w-[30%]  py-1     p-1 flex justify-center lg:justify-start items-center  ">
                  <Image
                    src={val.image}
                    width={40}
                    height={40}
                    className="hidden lg:flex rounded-2xl me-3"
                  />
                  <div className="flex flex-col">
                    <h6 className="text-test-9">{val.project}</h6>
                  </div>
                </span>
                <span className="w-[50%] lg:w-[20%]  py-1 flex   justify-center lg:justify-start p-1">
                  <div className="flex flex-col">
                    <h6 className="text-test-9">{val.budget}</h6>
                  </div>
                </span>
                <strong className="hidden lg:flex w-[100%] lg:w-[20%]  py-1  p-1 text-test-11  ">
                  <div>{val.status}</div>
                </strong>

                <div className="hidden lg:flex w-[100%] lg:w-[30%]  py-1   justify-between   p-1 pe-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={val.completion}
                    step="10"
                  ></input>

                  <span>{val.svg}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default Tables;
