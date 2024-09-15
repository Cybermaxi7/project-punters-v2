import { matchesData } from "../utils/matchesData";
import Odds from "./Odds";

export default function ClubFriendliesRow() {
    return (
        <div className="px-6 py-8 w-full">
            {matchesData.map((match, matchIndex) => (
                <div key={matchIndex} className="mb-8 md:mb-12 lg:mb-16">
                    <div className="flex justify-between gap-10 items-center md:overflow-visible overflow-x-auto">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4 items-center">
                                <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                                    <img
                                        src={match.home.flag}
                                        alt={`${match.home.name} flag`}
                                        className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                                    />
                                    {match.home.name}
                                </div>
                                <h3>Vs</h3>
                                <div className="color-[#2B2B2B] flex items-center gap-2 text-[14px]">
                                    <img
                                        src={match.away.flag}
                                        alt={`${match.away.name} flag`}
                                        className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                                    />
                                    {match.away.name}
                                </div>
                            </div>
                            <div className="w-1 h-1 bg-[#DBE1E7] rounded-full"></div>
                            <p className="text-[#1D994A] font-medium whitespace-nowrap text-[14px]">
                                {match.time}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px] border border-[#DBE1E7] button-shadow font-medium min-w-24">
                                ft: {match.prediction.ft}
                            </p>
                            <p className="bg-[#F7F8F9] rounded-full px-4 py-2 text-[12px] border border-[#DBE1E7] button-shadow font-medium min-w-40">
                                Possible Outcome: {match.prediction.outcome}
                            </p>
                        </div>
                    </div>

                    <div className="flex mt-4 justify-between gap-10 md:overflow-visible overflow-x-auto">
                        <div className="flex gap-4 md:gap-8">
                            {match.oddsLeft.map((data, index) => (
                                <Odds
                                    title={data.title}
                                    odds={data.odds}
                                    key={index}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2 lg:gap-12">
                            {match.oddsRight.map((data, index) => (
                                <Odds
                                    title={data.title}
                                    odds={data.odds}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
