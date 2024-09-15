import { matchesData } from "../utils/matchesData";
import { countries } from "../utils/stats";
import ClubFriendliesRow from "./ClubFriendliesRow";

export default function ClubFriendlies() {
    return (
        <div className="bg-white rounded-[8px] w-full border border-[#DBE1E7] card-stats-shadow font-gilroy mt-6 md:mt-12 lg:mt-16">
            <div className="flex bg-[#F7F8F9] border-b border-[#DBE1E7] rounded-[8px_8px_0_0] items-center justify-between p-5">
                <h2 className=" font-semibold text-[20px] leading-[30px]">
                    Football Leagues
                </h2>
                <h2 className=" font-semibold text-[20px] leading-[30px]">
                    24 Jun, 2024
                </h2>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <ClubFriendliesRow />
            </div>
        </div>
    );
}
