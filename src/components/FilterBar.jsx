import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const FilterDropdown = ({ title, options }) => {
  const [selected, setSelected] = useState(title);

  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className=" text-nowrap btn text-[16px] font-[Inter]  font-normal hover:bg-[#1D994A] btn-outline outline-none m-1 rounded-[100px]"
      >
        {selected}{" "}
        <span className="ml-2">
          <IoMdArrowDropdown />
        </span>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-[#ffffff] rounded-box w-52"
      >
        {options.map((option, index) => (
          <li key={index}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelected(option);
              }}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FilterBar = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 sm:gap-2 md:gap-4 lg:gap-6 w-full p-2">
      <FilterDropdown
        title="Football"
        options={["Football", "Basketball", "Tennis"]}
      />
      <FilterDropdown
        title="All Leagues"
        options={["Premier League", "La Liga", "Bundesliga"]}
      />
      <FilterDropdown title="All Stakes" options={["Low", "Medium", "High"]} />
      <FilterDropdown
        title="All Predictions"
        options={["Win", "Lose", "Draw"]}
      />
      <button className="btn bg-[#1D994A] text-[#f9f9f9] hover:border-[#1D994A] hover:text-[#1D994A] hover:bg-[#ffffff]">
        RESET FILTER
      </button>
    </div>
  );
};

export default FilterBar;
