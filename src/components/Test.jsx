import React from "react";
import { FaCheck, FaComments } from "react-icons/fa";
import Star from "./Star";
const Test = () => {
  return (
    <div className="w-[90%] mx-auto py-8 custom-font flex flex-col gap-5">
      <div className="flex justify-between items-center sm:flex-row flex-col gap-4">
        <h2 className="font-[400] text-[80px] ">4.7</h2>
        <div className="flex flex-col items-center  sm:items-end pb-4 sm:pb-0">
          <p className="font-[400] text-[19px] ">Ausgezeichnet</p>
          <Star size={35} gap={"gap-4"} />
        </div>
        <div className="flex items-center gap-2 text-[#6c757d] hover:text-white border border-[#6c757d] p-2 rounded-md hover:bg-[#6c757d] cursor-pointer">
          <FaComments />
          <p> Bewertung schreiben</p>
        </div>
      </div>

      <div className="border border-[#6c757d73] py-3 px-4 rounded-md">
        <div className="flex justify-between items-center pb-2">
          <p className="text-lg font-bold">Danny ♥️</p>
          <p className="text-lg font-normal">14.10.2023</p>
        </div>

        <div className="flex justify-between items-center border-b border-[#6c757d73] pb-4">
          <Star size={20} gap={"gap-1"} />
          <div className="flex items-center bg-green-700 py-1 px-2 font-bold text-sm rounded-md text-white">
            <FaCheck /> <p className="ml-1">Verifizierter Kauf</p>
          </div>
        </div>

        <div className="pt-3 text-lg">
          Vielen Dank für die schnelle Lieferung – alles hat reibungslos
          geklappt 🥳
        </div>
      </div>
      <div className="border border-[#6c757d73] py-3 px-4 rounded-md">
        <div className="flex justify-between items-center pb-2">
          <p className="text-lg font-bold">Danny ♥️</p>
          <p className="text-lg font-normal">14.10.2023</p>
        </div>

        <div className="flex justify-between items-center border-b border-[#6c757d73] pb-4">
          <Star size={20} gap={"gap-1"} />
          <div className="flex items-center bg-green-700 py-1 px-2 font-bold text-sm rounded-md text-white">
            <FaCheck /> <p className="ml-1">Verifizierter Kauf</p>
          </div>
        </div>

        <div className="pt-3 text-lg">
          Vielen Dank für die schnelle Lieferung – alles hat reibungslos
          geklappt 🥳
        </div>
      </div>
    </div>
  );
};

export default Test;
