"use clinte";
import React from "react";
import Image from "next/image";
const Profile = () => {
  return (
    <>
      <main className="w-[100%]  lg:ps-[270px] flex flex-col  mb-[80px] lg:mb-[50px]">
        <div className="w-[99%] mx-auto my-2  h-[300px] border lg:h-[120px] rounded-xl   flex justify-between items-start lg:items-center  px-2 flex-wrap shadow-lg shadow-gray-200">
          <div className="flex w-[99%] lg:w-[50%] h-[30%] lg:h-[100%]    justify-start   items-center">
            <Image
              src="/20.jpg"
              width={65}
              height={65}
              className="rounded-2xl"
            />
            <div className="ms-3">
              <h1 className="text-[22px]  text-test-9  ">Sayo Kravits</h1>
              <p className="text-[12px] text-test-11 ">Public Relations</p>
            </div>
          </div>
          <div className="flex w-[100%]  lg:w-[50%]  h-[70%]  justify-end   items-center lg:pe-3 rounded-lg ">
            <div className="w-[100%] lg:w-[70%] h-full lg:h-[50px] border  py-1  rounded-lg flex flex-wrap  justify-center lg:justify-evenly  bg-test-13">
              <div
                className="w-[99%] lg:w-[30%]  h-[31.33%] lg:h-full border flex justify-center items-center text-test-9 rounded-lg "
                id="btn"
              >
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
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
                <span className="">App</span>
              </div>
              <div
                className="w-[99%] lg:w-[30%] h-[31.33%] lg:h-full border flex justify-center items-center text-test-9 rounded-lg"
                id="btn"
              >
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="">Messages</span>
              </div>
              <div
                className="w-[99%] lg:w-[30%] h-[31.33%] lg:h-full border flex justify-center items-center text-test-9 rounded-lg"
                id="btn"
              >
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
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="">Settings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-[99%] mx-auto my-2  justify-evenly  flex-wrap">
          <div className="w-[99%] mx-auto  lg:w-[69.5%] border h-[700]  lg:h-[700px] rounded-2xl p-3 shadow-lg shadow-gray-400">
            <div className="flex justify-between ">
              <h1 className="text-[25px] text-test-9"> Edit Profile</h1>
              <button className="w-[130px] h-[35px] bg-test-1 rounded-xl ">
                setting
              </button>
            </div>
            <div className=" w-[100%]  my-3 flex flex-col  ">
              <div className="w-[100%]  py-1">
                <p className=" text-test-11 ">USER INFORMATION</p>
              </div>
              <div className="flex justify-evenly  flex-wrap  my-2">
                <div className="w-[99%] lg:w-[49.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Username
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="lucky.jesse"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[49.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Email address
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="jesse@example.com"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[49.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    First name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jesse"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[49.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Last name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Lucky"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className=" w-[100%]  my-3 flex flex-col  ">
              <div className="w-[100%]  py-1">
                <p className=" text-test-11 ">CONTACT INFORMATION</p>
              </div>
              <div className="flex justify-evenly  flex-wrap  my-2">
                <div className="w-[99%]  mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Address
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="lucky.jesse"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[32.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Email address
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="jesse@example.com"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[32.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    First name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jesse"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
                <div className="w-[99%] lg:w-[32.5%] mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    Last name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Lucky"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
              </div>
            </div>
            <div className=" w-[100%]  my-3 flex flex-col  ">
              <div className="w-[100%]  py-1">
                <p className=" text-test-11 ">ABOUT ME</p>
              </div>
              <div className="flex justify-evenly  flex-wrap  my-2">
                <div className="w-[99%]  mx-auto  bordre my-2 ">
                  <label htmlFor="name" className="text-test-9 ps-2">
                    ABOUT ME
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="lucky.jesse"
                    className="px-2 w-[100%] border py-2  rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[99%] mx-auto lg:w-[29.5%] border  lg:h-[700px] rounded-2xl shadow-lg shadow-gray-400 my-3 lg:my-0">
            <Image
              src="/19.jpg"
              width="1000"
              height="500"
              className="rounded-t-2xl"
            />

            <div className="flex justify-between px-2 mt-10">
              <button className="w-[130px] h-[35px] bg-test-23 rounded-xl text-white">
                Connect
              </button>
              <button className="w-[130px] h-[35px] bg-test-9 rounded-xl text-white">
                Message
              </button>
            </div>

            <div className="flex px-2 justify-center mt-10 items-center  py-4 lg:h-[20%]">
              <div className="flex flex-col text-test-9 mx-2 ">
                <span className="text-center">22</span>
                <span className="">Friends</span>
              </div>
              <div className="flex flex-col text-test-9 mx-2 ">
                <span className="text-center">10</span>
                <span className="">Photos</span>
              </div>
              <div className="flex flex-col text-test-9 mx-2 ">
                <span className="text-center">89</span>
                <span className="">Comments</span>
              </div>
            </div>

            <div className="flex  flex-col  justify-center items-center my-2 lg:h-[20%]">
              <div className=" text-test-9 h-[25%]">
                <strong>
                  Mark Davis
                  <span>, 35</span>
                </strong>
              </div>

              <div className="flex text-test-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <strong>Bucharest, Romania</strong>
              </div>
              <div className="text-test-9 flex h-[25%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <strong>SolutionManager-CreativeTimOfficer</strong>
              </div>

              <div className="text-test-9 flex h-[25%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 me-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>

                <strong>UniversityofComputerScience</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Profile;
