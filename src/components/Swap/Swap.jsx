"use client";
import { faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Swap() {
  const [reverse, setReverse] = useState(false);

  return (
    <div className="md:w-[534px] w-full h-full bg-slate-800 px-6 md:px-10 rounded-2xl py-10 my-7 z-10 shadow-lg md:mx-5">
      <h2 className="text-[#3bc5d1] text-2xl font-bold md:text-2xl text-left lg:text-left md:text-left ">
        Swap
      </h2>
      <span className="text-gray-200 text-sm">Trade tokens in an instant</span>
      <div className="px-0 py-6">
        <form>
          <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"}`}>
            <div>
              <div className="flex justify-between">
                <div>USDC</div>
              </div>
              <div className="flex items-center mt-2 bg-white border border-sky-600 rounded-lg invalid:border-red-500">
                <input
                  className="remove-arrow block w-full text-gray-800 leading-8 rounded-lg py-2 px-4 bg-white border border-transparent invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-transparent focus:ring-0 focus:ring-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                  type="number"
                  placeholder="1"
                  step="any"
                  min={0}
                />
                <button className="cursor-pointer mx-2 p-1 flex items-center text-sm bg-[#3bc5d1] hover:bg-[#3bc5d1]/80 rounded-lg text-white disabled:opacity-60 disabled:cursor-not-allowed">
                  Max
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t-2"></div>
              <button onClick={() => setReverse(!reverse)} type="button">
                <FontAwesomeIcon
                  className="h-4 w-4 p-4 rounded-full bg-[#3bc5d1] hover:bg-[#3bc5d1]/80"
                  icon={faArrowsUpDown}
                />
              </button>
              <div className="flex-grow border-t-2"></div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="flex content-end items-end justify-end">
                  <span className="text-md font-medium inline-flex text-center items-center px-1 text-gray-200">
                    HLUSD
                  </span>
                </div>
              </div>
              <input
                className="remove-arrow block mt-2 w-full leading-8 text-gray-800 rounded-lg py-2 px-4  bg-white border border-sky-600 focus:outline-none "
                type="number"
                name={"usds"}
                placeholder="1"
                min={0}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-row-2 md:grid-cols-2 gap-2 mt-4">
        <button className="items-center inline-flex justify-center text-white bg-[#3bc5d1] hover:bg-[#3bc5d1]/80 focus:ring-1 focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase disabled:cursor-not-allowed disabled:opacity-70">
          Approve
        </button>
        <button className="items-center inline-flex justify-center text-white bg-[#3bc5d1] hover:bg-[#3bc5d1]/80 focus:ring-1 focus:ring-sky-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase disabled:cursor-not-allowed disabled:opacity-70">
          Swap
        </button>
      </div>
    </div>
  );
}
