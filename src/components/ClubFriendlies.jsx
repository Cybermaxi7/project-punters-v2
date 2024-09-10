import { oddsDataTopLeft, oddsDataTopRight } from "../utils/oddsData";
import Odds from "./Odds";

export default function ClubFriendlies() {
    return (
        <div className="px-6 py-8">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                            <img
                                src="../../src/assets/germany-flag.svg"
                                alt=""
                            />
                            Germany
                        </div>
                        <h3>Vs</h3>
                        <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                            <img
                                src="../../src/assets/scotland-flag.svg"
                                alt=""
                            />
                            Scotland
                        </div>
                        <div className="w-1 h-1 bg-[#DBE1E7] rounded-full"></div>
                        <p className="text-[#1D994A] font-medium text-[14px]">
                            20:00 PM
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px]">
                            ft: 1X
                        </p>
                        <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px]">
                            Possible Outcome: 2-1
                        </p>
                    </div>
                </div>
                <div className="flex mt-4 justify-between">
                    <div className="flex gap-4 md:gap-8 ">
                        {oddsDataTopLeft.map((data, index) => (
                            <Odds
                                title={data.title}
                                odds={data.odds}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className="flex gap-6 md:gap-12">
                        {oddsDataTopRight.map((data, index) => (
                            <Odds
                                title={data.title}
                                key={index}
                                odds={data.odds}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
