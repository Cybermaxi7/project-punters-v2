import { GoSearch } from "react-icons/go";
import CardStats from "./CardStats";
import LeagueRows from "./LeagueRows";
import { topLeagues } from "../utils/stats";

export default function FootballLeagues() {
  return (
    <div className="bg-white rounded-[8px] w-full border border-[#DBE1E7] card-stats-shadow font-gilroy mt-6 md:mt-12 lg:mt-16">
      <div className="flex bg-[#F7F8F9] border-b border-[#DBE1E7] rounded-[8px_8px_0_0] items-center justify-between p-5">
        <h2 className=" font-semibold text-[20px] leading-[30px]">
          Football Leagues
        </h2>

        <button>
          <GoSearch className="text-[20px]" />
        </button>
      </div>

      <h3 className="font-semibold text-[#1D994A] leading-[22px] tracking-[4px] flex justify-between px-5 py-2 font-inter">
        TOP LEAGUES
      </h3>
      <div className="flex flex-col gap-2">
        {topLeagues.map((league, index) => (
          <LeagueRows key={index} country={league} />
        ))}
      </div>
    </div>
  );
}
