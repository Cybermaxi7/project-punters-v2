import { Link } from "react-router-dom";

export default function HeroPredictions() {
    return (
        <div className="bg-[#1D994A] w-full h-full">
            <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 py-6 md:py-12">
                <div className="w-full max-w-[975px] flex flex-col gap-2">
                    <h1 className="font-gilroy font-semibold text-[40px] sm:text-[52px] md:text-[64px] leading-[50px] sm:leading-[60px] md:leading-[70px] lg:leading-[90px] text-white">
                        Boost Your Sports Betting Experience with{" "}
                        <span className="text-[#DBF024]">NaijaPunter</span>
                    </h1>
                    <p className="font-inter mt-2 font-medium leading-6 md:leading-[32px] text-[15px] text-white md:text-[20px]">
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Curabitur
                        tempus urna at turpis condimentum lobortis.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <button className="bg-white rounded-full px-4 md:px-6 py-3 md:py-[14px] flex items-center justify-center text-sm md:text-[16px] leading-5 md:leading-6 text-[#2B2B2B] gap-2">
                            EURO 2024{" "}
                            <img
                                src="/src/assets/arrow-down.svg"
                                alt="down arrow"
                            />
                        </button>
                        <button className="bg-white rounded-full px-4 md:px-6 py-3 md:py-[14px] flex items-center justify-center text-sm md:text-[16px] leading-5 md:leading-6 text-[#2B2B2B] gap-2">
                            Today{" "}
                            <img
                                src="/src/assets/arrow-down.svg"
                                alt="down arrow"
                            />
                        </button>
                        <button className="bg-white rounded-full px-4 md:px-6 py-3 md:py-[14px] flex items-center justify-center text-sm md:text-[16px] leading-5 md:leading-6 text-[#2B2B2B] gap-2">
                            <img
                                src="/src/assets/calendar.svg"
                                alt="calender svg"
                            />{" "}
                            DD-MM-YY{" "}
                            <img
                                src="/src/assets/arrow-down.svg"
                                alt="down arrow"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
