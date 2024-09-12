import React from "react";
import { IoFootball } from "react-icons/io5";

const MatchOutcome = () => {
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
    <div className="relative flex flex-col bg-green-600 py-[48px] px-[140px] rounded-lg shadow-lg justify-center items-center overflow-hidden">
      {/* Top Right Ball Image (Spinning Animation) */}
      <IoFootball className="absolute top-[-20px] right-[-20px] w-[100px] h-[100px] text-[#96D6A6] animate-spin-slow" />

      {/* Bottom Left Ball Image (Bouncing Animation) */}
      <IoFootball className="text-[#96D6A6] absolute bottom-[-20px] left-[-20px] w-[100px] h-[100px] animate-bounce-slow" />

      <div className="flex flex-col md:flex-row items-center justify-around">
        {/* Left Team - Germany */}
        <Team
          flag="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
          name="Germany"
          recentForm={["W", "W", "W", "D", "D"]}
        />

        {/* Match Outcome and Details */}
        <div className="flex flex-col items-center justify-center mx-8 text-white">
          <p className="text-sm font-semibold">POSSIBLE OUTCOME</p>
          <div className="flex items-center justify-center space-x-2 my-2 mt-[16px]">
            <OutcomeNumber number="2" />
            <span className="text-3xl font-bold">-</span>
            <OutcomeNumber number="0" />
          </div>
          {/* Current Date and Time */}
          <p className="mt-[28px]">{getCurrentFormattedDateTime()}</p>
        </div>

        {/* Right Team - Scotland */}
        <Team
          flag="https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg"
          name="Scotland"
          recentForm={["L", "L", "L", "D", "D"]}
        />
      </div>

      {/* Prediction */}
      <div className="mt-[64px] bg-white w-[249px] h-[78px] text-green-700 p-3 rounded-[4px] text-center shadow-md">
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

const Team = ({ flag, name, recentForm }) => (
  <div className="flex flex-col items-center">
    <div className="flex">
      <img src={flag} alt={`${name} flag`} className="w-12 h-12 rounded-full" />
      <p className="text-white text-xl font-semibold mt-2 ml-6">{name}</p>
    </div>

    <div className="flex space-x-1.5 mt-2">
      {recentForm.map((result, index) => (
        <span
          key={index}
          className="bg-white text-green-600 font-bold w-6 h-6 flex items-center justify-center rounded-full"
        >
          {result}
        </span>
      ))}
    </div>
  </div>
);

export default MatchOutcome;
