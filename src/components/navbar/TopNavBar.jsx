import React from "react";
import Image from "next/image";

export default function TopNavBar() {
  return (
    <div className="w-[100%] h-[10vh]  rounded-t-2xl  pt-3  ">
      <div className="h-[30%] flex justify-center items-center ">
        <Image src="/1.png" width="20" height="10" className="" />
        <span className="ms-1 text-test-9">Argon Dashboard 2</span>
      </div>
      <div className="border-b-2 py-4 w-[75%] mx-auto"></div>
    </div>
  );
}
