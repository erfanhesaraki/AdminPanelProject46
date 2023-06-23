"use client";

import React from "react";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";
import HeaderCenter from "./headerCenter";
import { usePathname } from "next/navigation";
const Header = (props) => {
  const {setIsOpenNav, isOpenNav} = props;
  const pathname = usePathname();
  return (
    pathname !== "/signUp" &&
    pathname !== "/signIn" && (
      <div className="flex flex-wrap h-[130px] lg:h-[90px] w-[99%] mx-auto my-2  rounded-2xl bg-test-10 lg:pl-[300px]  pt-[5px]">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav}/>
      </div>
    )
  );
};

export default Header;
