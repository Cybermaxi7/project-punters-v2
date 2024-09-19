import React from "react";

export default function CardStatsRow({ text, value }) {
    return (
        <div
            data-aos="slide-right"
            className="flex items-center justify-between py-2 md:py-4 px-3 md:px-5 border-b border-[#DBE1E7]"
        >
            <p className="text-base leading-[24px] text-[#2B2B2B] font-medium">
                {text}
            </p>
            <p className="text-base text-[#1D994A] font-semibold leading-[24px]">
                {value}
            </p>
        </div>
    );
}
