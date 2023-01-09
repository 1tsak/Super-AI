import React from "react";
import { BsCalendarDate, BsCaretDownFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Navbar() {
  return (
    <div className="py-8 px-4 flex flex-col space-y-3 items-start">
      <div className="px-2 py-1 flex flex-col">
        <div className="flex ">
          <text className="font-bold text-xl ">
            Comparison of high performer resignation rates to the overall
            resignation rate
          </text>
          <div className=" m-1 p-2 rounded-full text-white bg-black">
            <BsCaretDownFill size={10} />
          </div>
        </div>
        <text>Do high performers resign more often than others?</text>
      </div>

      <div className="flex flex-row space-x-8 p-2">
        <button className="border rounded px-2 py-1 flex flex-row space-x-2 items-center active:bg-gray-50">
          <BsCalendarDate />
          <text className="font-semibold">Mar 2019</text>
        </button>
        <button className="border rounded px-2 py-1 flex flex-row space-x-2 items-center active:bg-gray-50">
          <AiOutlinePlus />
          <text className="font-semibold">Add a filter</text>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
