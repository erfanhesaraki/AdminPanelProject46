"use client";

import React from "react";
import { usePathname } from "next/navigation";
const menu = ["Creative Tim", "About Us", "Blog", "License"];

const Footer = () => {
  const pathname = usePathname();
  return (
    pathname !== "/signUp" &&
    pathname !== "/signIn" && (
      <div className="w-[100%]  lg:ps-[270px] h-[80px]  lg:h-[50px] fixed bottom-0 right-0 flex justify-between  items-center bg-test-13  flex-wrap">
        <div className="w-[100%] lg:w-[50%]">
          <p className="text-test-11">
            © 2023, made with by <b className="text-test-12"> Creative Tim</b>{" "}
            for a better web.
          </p>
        </div>
        <div className="w-[100%] lg:w-[50%] flex justify-end">
          <ul className="flex justify-evenly items-center w-[100%] md:w-[50%]  lg:w-[40%]">
            {menu.map((val, i) => {
              return (
                <li className="text-test-9" key={i}>
                  {val}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  );
};

export default Footer;
