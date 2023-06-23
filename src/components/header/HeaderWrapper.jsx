'use client'
import Navbar from "../navbar/Navbar"
import Header from "./Header"
import {useState} from "react";

export const HeaderWrapper = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  return (
    <>
      <Header setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav}/>
      <Navbar isOpenNav={isOpenNav}/>
    </>
  )
}