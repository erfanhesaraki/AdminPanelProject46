import React from "react";
import Image from "next/image";
function VirtualReality() {
  return (
    <main className="w-[100%] h-[90vh]  lg:ps-[270px] flex  px-2 overflow-hidden   scroll-auto">
      <div
        className="w-[100%] h-[100%]  rounded-xl"
        style={{
          backgroundImage: `url(${"22.png"})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </main>
  );
}

export default VirtualReality;
