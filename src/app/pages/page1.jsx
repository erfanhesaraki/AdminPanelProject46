import React from "react";

const Page1 = () => {
  return (
    <div className=" flex justify-evenly items-center flex-wrap overflow-x-hidden">
      <div className="w-[100%] md:w-[50%] lg:w-[20%] my-2 h-[100px] bg-white  rounded-[30px]">
        <div className="flex   justify-between px-4 items-center">
          <div className="mt-2">
            <p>Today's Money</p>
            <h5>$53,000</h5>
          </div>
          <div className=" p-4 border bg-test-14 rounded-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
        </div>

        <div className="flex  items-center p-3">
          <span className=" text-green-500">+55%</span>
          since yesterday
        </div>
      </div>
      <div className="w-[100%] md:w-[50%]   lg:w-[20%] my-2 h-[100px] bg-white  rounded-[30px]">
        <div className="flex   justify-between px-4 items-center">
          <div className="mt-2">
            <p>Today's Users</p>
            <h5>2,300</h5>
          </div>
          <div className=" p-4 border bg-test-15 rounded-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </div>
        </div>

        <div className="flex  items-center p-3">
          <span className=" text-green-500">+3%</span>
          since last week
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[20%] my-2 h-[100px] bg-white  rounded-[30px]">
        <div className="flex   justify-between px-4 items-center">
          <div className="mt-2">
            <p>New Clients</p>
            <h5>+3,462</h5>
          </div>
          <div className=" p-4 border bg-test-16 rounded-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
        </div>

        <div className="flex  items-center p-3">
          <span className=" text-green-500">-2%</span>
          since last quarter
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] lg:w-[20%] my-2 h-[100px] bg-white  rounded-[30px]">
        <div className="flex   justify-between px-4 items-center">
          <div className="mt-2">
            <p>Sales</p>
            <h5>$103,430</h5>
          </div>
          <div className=" p-4 border bg-test-17 rounded-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex  items-center p-3">
          <span className=" text-green-500">+5%</span>
          than last month
        </div>
      </div>
    </div>
  );
};

export default Page1;
