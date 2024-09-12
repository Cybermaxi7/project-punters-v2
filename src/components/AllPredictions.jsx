import { useState } from "react";
import { filterButtons } from "../utils/filterButtons";
import ClubFriendlies from "./ClubFriendlies";
import FootballLeagues from "./FootballLeagues";

export default function AllPredictions() {
  const [selectedFilter, setSelectedFilter] = useState("All Matches");

  return (
    <div className="w-full max-w-[1440px] mx-auto h-full px-6 py-8">
      <div className="w-full max-w-[617px]">
        <p className="w-full font-gilroy text-xl md:text-2xl lg:text-[32px] leading-[32px] md:leading-[48px] font-semibold">
          Todays Football Matches Predictions For Monday, June 24th, 2024
        </p>
      </div>
      <div className="w-full max-w-[1192px]">
        <p className="w-full font-inter text-[16px] md:text-[20px] leading-6 md:leading-9 text-[#2B2B2B]">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        {filterButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedFilter(button)}
            className={`rounded-[100px] border border-[#DBE1E7] py-2 md:py-3 px-5 md:px-6 transition-all duration-300 ${
              selectedFilter === button
                ? "bg-[#1D994A] text-white"
                : "hover:bg-[#1D994A] hover:text-white"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16">
        <FootballLeagues />
        <ClubFriendlies />
      </div>
    </div>
  );
}
