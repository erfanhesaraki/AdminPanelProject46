"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const HeaderLeft = () => {
  const pathname = usePathname().replace("/", "");
  return (
    <div className="text-white  w-[100%]   lg:w-[50%] h-[50px]     flex  flex-col justify-center items-start ">
      <h3>
        <span>
          <b>pages /</b>
        </span>
        {pathname}
      </h3>
      <h2>
        <b>{pathname}</b>
      </h2>
    </div>
  );
};

export default HeaderLeft;
