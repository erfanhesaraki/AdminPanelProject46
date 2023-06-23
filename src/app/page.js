'use client'
import OpenSetting from "@/components/home/OpenSetting";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Setting from "@/components/home/asideRight";
import { useState } from "react";

export default function Home() {
const [open , setOpen] = useState (false)

const handleCloseSetting = () => {
  setOpen(false);
};



  return (
    <section className="bg-test-13  ">
      <div className=" w-[100%]  lg:ps-[270px] flex-wrap  overflow-x-hidden mb-[80px] lg:mb-[50px]">
        <Page1 />
        <Page2 />
        <Page3 />
        <OpenSetting setOpen={setOpen} />
      <Setting open={open} onClose={handleCloseSetting} />
      </div>
    </section>
  );
}
