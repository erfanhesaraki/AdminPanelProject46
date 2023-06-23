import React from "react";

const HeaderCenter = () => {
  return (
    <>
      <div className=" w-[50%] lg:w-[35%] h-[50px]   flex items-center  justify-center lg:justify-end  ">
        <input
          type="search"
          name=""
          id=""
          className="h-[80%] w-[100%] md:w-[50%] lg:w-[45%]  rounded rounded-4  ps-6 relative"
          placeholder="Type here"
        />
      </div>
    </>
  );
};

export default HeaderCenter;
