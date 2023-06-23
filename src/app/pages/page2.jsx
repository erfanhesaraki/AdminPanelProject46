import React from "react";
import { CustomChart } from "@/components/chart/chart";

const Page2 = () => {
  return (
    <div className="w-[100%]  lg:h-[500px] flex flex-wrap   justify-evenly my-5 overflow-x-hidden ">
      <div className="w-[100%]  lg:w-[60%] h-[100%] border rounded-xl ">
        <CustomChart />
      </div>
      <div
        className=" hidden lg:flex  lg:w-[35%] h:auto lg:h-[100%] border rounded-xl  justify-center items-end"
        style={{
          backgroundImage: `url(${"3.jpg"})`,
        }}
      >
        <div className="w-[95%] h-[40%]   mb-5 p-4 ">
          <div className="border  text-lg w-[30px]  bg-white rounded-md flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6   "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
              />
            </svg>
          </div>
          <div className=" text-white mt-3 ">
            <h5 className="py-2">Get started with Argon</h5>
            <p className="py-2">
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
