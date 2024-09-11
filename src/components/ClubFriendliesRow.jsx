import { oddsDataTopLeft, oddsDataTopRight } from "../utils/oddsData";
import Odds from "./Odds";

export default function ClubFriendliesRow() {
  return (
    <div className="px-6 py-8">
      <div>
        <div className="flex justify-between gap-10 items-center md:overflow-visible overflow-x-auto">
          <div className="flex items-center gap-4 ">
            <div className="flex gap-4 items-center ">
              <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                <img src="../../src/assets/germany-flag.svg" alt="" />
                Germany
              </div>
              <h3>Vs</h3>
              <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                <img src="../../src/assets/scotland-flag.svg" alt="" />
                Scotland
              </div>
            </div>
            <div className="w-1 h-1 bg-[#DBE1E7] rounded-full"></div>
            <p className="text-[#1D994A] font-medium whitespace-nowrap text-[14px]">
              20:00 PM
            </p>
          </div>
          <div className="flex  items-center gap-2">
            <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px] border border-[#DBE1E7] button-shadow font-medium min-w-24">
              ft: 1X
            </p>
            <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px] border border-[#DBE1E7] button-shadow font-medium min-w-40">
              Possible Outcome: 2-1
            </p>
          </div>
        </div>
        {/* <div className="flex mt-4 justify-between">
                    <div className="grid grid-cols-4 md:flex gap-4 md:gap-8 flex-wrap ">
                        {oddsDataTopLeft.map((data, index) => (
                            <Odds
                                title={data.title}
                                odds={data.odds}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-12">
                        {oddsDataTopRight.map((data, index) => (
                            <Odds
                                title={data.title}
                                key={index}
                                odds={data.odds}
                            />
                        ))}
                    </div>
                </div> */}
        <div className="flex mt-4 justify-between gap-10 md:overflow-visible overflow-x-auto">
          <div className="flex gap-4 md:gap-8 ">
            {oddsDataTopLeft.map((data, index) => (
              <Odds title={data.title} odds={data.odds} key={index} />
            ))}
          </div>
          <div className="flex gap-2 lg:gap-12 ">
            {oddsDataTopRight.map((data, index) => (
              <Odds title={data.title} key={index} odds={data.odds} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
