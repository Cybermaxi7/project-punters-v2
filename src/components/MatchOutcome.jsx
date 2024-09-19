import React from "react";
import { IoFootball } from "react-icons/io5";
import { matchesData } from "../utils/matchesData";

const MatchOutcome = () => {
    const match = matchesData[0];

    // Function to get the current formatted date and time
    const getCurrentFormattedDateTime = () => {
        const date = new Date(); // Get the current date and time

        // Get the day, month, and year
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" }); // Short month name
        const year = date.getFullYear();

        // Format time in 12-hour format with AM/PM
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const period = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format

        return `Today, ${day} ${month}, ${year} • ${formattedHours}:${minutes} ${period}`;
    };

    return (
        <div className="relative flex flex-col bg-green-600 py-[48px] px-[20px] sm:px-[60px] md:px-[140px] rounded-lg shadow-lg justify-center items-center overflow-hidden">
            {/* Top Right Ball Image (Spinning Animation) */}
            <IoFootball className="absolute top-[-20px] right-[-20px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] text-[#96D6A6] animate-spin-slow" />

            {/* Bottom Left Ball Image (Bouncing Animation) */}
            <IoFootball className="text-[#96D6A6] absolute bottom-[-20px] left-[-20px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] animate-bounce-slow" />

            <div className="flex flex-col md:flex-row items-center justify-around mt-4 md:mt-0">
                {/* Left Team */}
                <Team
                    flag={match.home.flag}
                    name={match.home.name}
                    direction="left"
                    recentForm={["W", "W", "W", "D", "D"]}
                />

                {/* Match Outcome and Details */}
                <div className="flex flex-col items-center justify-center mx-8 text-white mt-4 md:mt-0">
                    <p className="text-sm font-semibold">POSSIBLE OUTCOME</p>
                    <div className="flex items-center justify-center space-x-2 my-2 mt-[16px]">
                        <OutcomeNumber
                            number={match.prediction.outcome.split("-")[0]}
                        />
                        <span className="text-3xl font-bold">-</span>
                        <OutcomeNumber
                            number={match.prediction.outcome.split("-")[1]}
                        />
                    </div>
                    {/* Current Date and Time */}
                    <p className="mt-[28px]">{getCurrentFormattedDateTime()}</p>
                </div>

                {/* Right Team */}
                <Team
                    flag={match.away.flag}
                    name={match.away.name}
                    direction="right"
                    recentForm={["L", "L", "L", "D", "D"]}
                />
            </div>

            {/* Prediction */}
            <div className="mt-[64px] bg-white w-full sm:w-[249px] h-[78px] text-green-700 p-3 rounded-[4px] text-center shadow-md">
                <p className="font-bold">Full-time Result: 1X</p>
                <p>(70% probability)</p>
            </div>
        </div>
    );
};

const OutcomeNumber = ({ number }) => (
    <div className="bg-white text-green-600 font-bold text-2xl px-4 py-2 rounded-lg shadow-md">
        {number}
    </div>
);

const Team = ({ flag, name, recentForm, direction }) => {
    return (
        <div
            className="flex flex-col items-center "
            data-aos={`slide-${direction}`}
        >
            <div className="flex items-center">
                <img
                    src={flag}
                    alt={`${name} flag`}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <p className="text-white text-xl font-semibold mt-2 ml-6 font-inter">
                    {name}
                </p>
            </div>

            <div className="flex space-x-1.5 mt-2 ">
                {recentForm.map((result, index) => {
                    let resultColor;
                    if (result === "W") {
                        resultColor = "bg-[#D6F0E0] text-[#1D994A]";
                    } else if (result === "D") {
                        resultColor = "bg-[#D6F0E0] text-[#2B2B2B]";
                    } else if (result === "L") {
                        resultColor = "bg-[#D6F0E0] text-[#EE1C1C]";
                    }

                    return (
                        <span
                            key={index}
                            className={`font-bold w-6 h-6 flex items-center justify-center rounded-full text-sm font-inter ${resultColor}`}
                        >
                            {result}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default MatchOutcome;
