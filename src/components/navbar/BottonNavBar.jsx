import React from "react";
import Image from "next/image";
const BottonNavBar = () => {
  return (
    <div className="w-[100%] h-[35vh]   rounded-b-2xl   ">
      <div className="w-full h-full  rounded-b-2xl flex flex-col justify-end items-center">
        <div className="">
          <Image src="/2.svg" width="130" height="110" className="" />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h3 className="text-dark">NeedHealp?</h3>
          <span className="text-test-9">pleas check our docs</span>
        </div>
        <div className=" flex flex-col justify-center items-center w-[100%] mt-3">
          <button className="bg-test-9 py-2 w-[90%] my-1 rounded-md text-white">
            Documentation
          </button>
          <button className="bg-test-10 py-2 w-[90%] my-1 rounded-md text-white">
            Upgrade to pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottonNavBar;
