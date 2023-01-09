import React from "react";
import {
  AiFillDownCircle,
  AiOutlineUnorderedList,
  AiTwotoneSetting,
} from "react-icons/ai";
import { BsBorderAll, BsInfo } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="w-80 relative shadow-xl drop-shadow-md h-screen flex flex-col bg-gray-100">
      <div className="absolute flex-col space-y-4 -left-7 top-[30%]">
        <div className=" bg-blue-500 text-white drop-shadow-md  p-3 rounded-full">
          <BsInfo size={20} />
        </div>
        <div className=" bg-gray-500 text-white drop-shadow-md  p-3 rounded-full">
          <AiOutlineUnorderedList size={20} />
        </div>
        <div className=" bg-gray-500 text-white drop-shadow-md  p-3 rounded-full">
          <AiTwotoneSetting size={20} />
        </div>
        <div className=" bg-gray-500 text-white  drop-shadow-md p-3 rounded-full">
          <AiFillDownCircle size={20} />
        </div>
        <div className=" bg-black text-white drop-shadow-md  p-3 rounded-full">
          <BsBorderAll size={20} />
        </div>
      </div>
      <div className="px-1 flex flex-col space-y-4">
        <text className="font-bold mx-3 text-lg">Summary</text>
        <text className="font-bold mx-3 text-md">Apr 2018 - Mar 2019</text>
        <div className="bg-white px-4 text-gray-500">
          <div className="border-t px-3 text-sm font-bold py-2 text-blue-500 flex flex-row justify-between transition-colors">
            <text>Overall</text>
            <text>14.0 %</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2  flex flex-row justify-between transition-colors">
            <text>Resignation Count</text>
            <text>639</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2  flex flex-row justify-between transition-colors">
            <text>Average Headcount</text>
            <text>4.58 K</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2 text-red-500 flex flex-row justify-between transition-colors">
            <text>High Performer</text>
            <text>14.1 %</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2  flex flex-row justify-between transition-colors">
            <text>Resignation Count</text>
            <text>152</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2  flex flex-row justify-between transition-colors">
            <text>Average Headcount</text>
            <text>108 K</text>
          </div>
          <div className="border-t px-3 font-bold text-sm py-2 text-green-500 flex flex-row justify-between transition-colors">
            <text>Difference</text>
            <text>-0.16 pp</text>
          </div>
        </div>
        <button className=" mx-2 py-2 border border-gray-300 font-semibold">
          View details
        </button>
      </div>
      <div className="flex flex-col px-2 space-y-2">
        <text className="font-medium border-b py-1 mx-3 text-base">Legend</text>

        <div className="bg-white">
          <div className="border px-3 text-sm font-semibold py-2 flex flex-col items-start">
            <div className="text-gray-500">
              Not all data items are shown in this chart. To show these values,
              go to
            </div>
            <text className="text-blue-400">CHAT SETTINGS</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
