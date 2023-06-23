"use client";

import React from "react";
import CenterNavBar from "./CenterNavBar";
import TopNavBar from "./TopNavBar";
import BottonNavBar from "./BottonNavBar";
import {usePathname} from "next/navigation";

const Navbar = (props) => {
  const pathname = usePathname();
  const {isOpenNav} = props;
  return (
    pathname !== "/signUp" &&
    pathname !== "/signIn" && (
      <div
        className={`h-[95vh] w-[250px] ${isOpenNav ? '' : 'hidden'}  lg:flex flex-col justify-evenly items-center fixed top-[2.5%] left-[2vh] shadow-lg  shadow-gray-300  bg-white  rounded-[20px]   z-10`}>
        <TopNavBar/>
        <CenterNavBar/>
        <BottonNavBar/>
      </div>
    )
  );
};

export default Navbar;
