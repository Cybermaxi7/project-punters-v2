import { IoIosArrowDown } from "react-icons/io";

export default function LeagueRows({ country }) {
    return (
        <div className="flex justify-between px-5 py-2">
            <div className="flex items-center gap-2">
                <img src="/src/assets/germany-flag.svg" alt="england flag" />
                <p className="font-medium text-sm md:text-base leading-5 md:leading-6 text-[#2B2B2B]">
                    {country}
                </p>
            </div>
            <IoIosArrowDown />
        </div>
    );
}
