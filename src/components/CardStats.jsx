import React from "react";

export default function CardStats({
    heading,
    subHeading = false,
    hasGoals = false,
    children,
}) {
    return (
        <div className="bg-white rounded-[8px] w-[388px] border border-[#DBE1E7] card-stats-shadow font-gilroy">
            <h2 className="bg-[#F7F8F9] border-b border-[#DBE1E7] rounded-[8px_8px_0_0] font-semibold text-[20px] leading-[30px] p-5">
                {heading}
            </h2>
            {subHeading && (
                <h3 className="font-semibold text-[#1D994A] leading-[22px] tracking-[4px] flex justify-between px-5 py-2 font-inter">
                    PLAYERS{" "}
                    <span className="">
                        {hasGoals ? "GOALS" : "YELLOW CARDS"}
                    </span>
                </h3>
            )}
            <div>{children}</div>
        </div>
    );
}
