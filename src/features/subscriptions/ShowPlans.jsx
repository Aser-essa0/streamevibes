/* eslint-disable react/prop-types */
import { useState } from "react";

function ShowPlans({ data }) {
  const [type, setType] = useState("Standard");
  const planData = data.filter((el) => el.type === type)[0];
  return (
    <>
      <div className="hidden max-md:block">
        <ul className="mb-5 flex h-[61px] w-full items-center rounded-lg border border-black-shade-5 bg-black-shade-1 p-2">
          <li
            className={`flex h-[45px] w-full items-center justify-center ${type === "Basic" ? "rounded-md bg-black-shade-4" : ""}`}
            onClick={() => setType("Basic")}
          >
            Basic
          </li>
          <li
            className={`flex h-[45px] w-full items-center justify-center ${type === "Standard" ? "rounded-md bg-black-shade-4" : ""}`}
            onClick={() => setType("Standard")}
          >
            Standard
          </li>
          <li
            className={`flex h-[45px] w-full items-center justify-center ${type === "Premium" ? "rounded-md bg-black-shade-4" : ""}`}
            onClick={() => setType("Premium")}
          >
            Premium
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 rounded-xl border border-black-shade-5 bg-black-shade-1 p-6">
          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Price</p>
            <p className="text-white">{planData.Price}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Free Trail</p>
            <p className="text-white">{planData["Free Trail"]}</p>
          </span>

          <span className="col-span-2 flex flex-col text-sm font-medium leading-[150%]">
            <p>Content</p>
            <p className="text-white">{planData.Content}</p>
          </span>

          <span className="col-span-2 flex flex-col text-sm font-medium leading-[150%]">
            <p>Devices</p>
            <p className="text-white">{planData.Devices}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Cancel Anytime</p>
            <p className="text-white">{planData["Cancel Anytime"]}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>HDR</p>
            <p className="text-white">{planData.HDR}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Dolby Atmos</p>
            <p className="text-white">{planData["Dolby Atmos"]}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Ad - Free</p>
            <p className="text-white">{planData["Ad - Free"]}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Offline Viewing</p>
            <p className="text-white">{planData["Offline Viewing"]}</p>
          </span>

          <span className="flex flex-col text-sm font-medium leading-[150%]">
            <p>Family Sharing</p>
            <p className="text-white">{planData["Family Sharing"]}</p>
          </span>
        </div>
      </div>
    </>
  );
}

export default ShowPlans;
