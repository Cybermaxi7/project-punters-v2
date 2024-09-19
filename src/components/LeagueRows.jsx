import { IoIosArrowDown } from "react-icons/io";

export default function LeagueRows({ country, imgUrl }) {
    return (
        <div data-aos="slide-right" className="flex justify-between px-5 py-2">
            <div className="flex items-center gap-2">
                <img
                    src={imgUrl}
                    alt="england flag"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
                <p className="font-medium text-sm md:text-base leading-5 md:leading-6 text-[#2B2B2B]">
                    {country}
                </p>
            </div>
            <IoIosArrowDown />
        </div>
    );
}
