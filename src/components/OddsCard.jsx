import React from "react";

const OddsCard = ({ odds1, oddsX, odds2, heading }) => {
    return (
        <div
            data-aos="fade-up"
            className="bg-white rounded-[8px] shadow-md border border-[#DBE1E7] w-full max-w-[800px] sm:max-w-[500px] lg:max-w-[700px] mx-auto"
        >
            <div className="bg-[#F7F8F9] rounded-t-[8px] p-5 flex justify-start items-center border-[#DBE1E7] h-[70px]">
                <h3 className="text-sm font-semibold text-[#2B2B2B]">
                    {heading}
                </h3>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap justify-between items-center p-5 gap-4">
                <div className="flex items-center gap-4 w-[90%] md:w-fit">
                    <span className="text-sm font-medium text-[#2B2B2B]">
                        1:
                    </span>
                    <button className="btn btn-sm outline-none text-sm  hover:border-none text-[#1D994A] bg-[#E9F7EE] border-[#B6E2CA] hover:text-[#F9F9F9] hover:bg-[#1D994A] mt-1 w-full md:w-fit">
                        {odds1} Odds
                    </button>
                </div>

                <div className="flex items-center gap-4 w-[90%] md:w-fit">
                    <span className="text-sm font-medium text-[#2B2B2B]">
                        X:
                    </span>
                    <button className="btn btn-sm outline-none hover:border-none text-[#1D994A] bg-[#E9F7EE] border-[#B6E2CA] hover:text-[#F9F9F9] hover:bg-[#1D994A] text-sm mt-1 w-full md:w-fit">
                        {oddsX} Odds
                    </button>
                </div>

                <div className="flex items-center gap-4 w-[90%] md:w-fit">
                    <span className="text-sm font-medium text-[#2B2B2B]">
                        2:
                    </span>
                    <button className="btn btn-sm outline-none hover:border-none text-[#1D994A] bg-[#E9F7EE] border-[#B6E2CA] hover:text-[#F9F9F9] hover:bg-[#1D994A] text-sm mt-1 w-full md:w-fit">
                        {odds2} Odds
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OddsCard;
