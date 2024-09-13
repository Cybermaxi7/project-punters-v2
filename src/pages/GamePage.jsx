import { NavLink, Routes, Route, Link, useLocation } from "react-router-dom";
import GamePreview from "../components/GamePreview";
import MatchStats from "../components/MatchStats";
import TeamStats from "../components/TeamStats";
import PlayerStats from "../components/PlayerStats";
import { FaArrowLeftLong, FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowForward, IoIosFootball } from "react-icons/io";
import MatchOutcome from "../components/MatchOutcome";
import { PiEyesBold, PiPersonSimpleRunBold } from "react-icons/pi";
import { BsBarChartLineFill } from "react-icons/bs";
import OddsTab from "../components/OddsTab";

function GamePage() {
  const location = useLocation();

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-10 py-6 md:py-12 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
        <div>
          <div className="flex gap-2 items-center">
            <FaArrowLeftLong />
            <Link
              to="/all-predictions"
              className="font-gilroy text-sm md:text-base whitespace-nowrap leading-normal tracking[-2%] font-medium text-[#2B2B2B'] "
            >
              Back to all predictions
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-5 md:mt-2">
          <Link className="font-medium font-gilroy text-sm md:text-base whitespace-nowrap leading-6 text-[#242424]">
            All Predictions
          </Link>
          <IoIosArrowForward />

          <Link className=" font-medium font-gilroy text-sm md:text-base whitespace-nowrap leading-6 text-[#1D994A]">
            Germany Vs Scotland
          </Link>
        </div>
        <div></div>
      </div>
      <MatchOutcome />
      {/* Tab navigation */}
      <nav className="flex items-center gap-3 flex-col md:flex-row mt-8">
        <NavLink
          to="preview" // Use relative path
          className={({ isActive }) =>
            isActive ||
            location.pathname === "/game" ||
            location.pathname === "/game/"
              ? "active-tab flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
              : "flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
          }
        >
          <PiEyesBold className="w-6 h-6" />
          Preview
        </NavLink>
        <NavLink
          to="match-stats" // Use relative path
          className={({ isActive }) =>
            isActive
              ? "active-tab flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
              : "flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
          }
        >
          <BsBarChartLineFill className="w-5 h-5" />
          Match Stats
        </NavLink>
        <NavLink
          to="team-stats" // Use relative path
          className={({ isActive }) =>
            isActive
              ? "active-tab flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
              : "flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
          }
        >
          <FaArrowTrendUp className="w-6 h-6" />
          Team Stats
        </NavLink>
        <NavLink
          to="player-stats" // Use relative path
          className={({ isActive }) =>
            isActive
              ? "active-tab flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
              : "flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
          }
        >
          <PiPersonSimpleRunBold className="w-6 h-6" />
          Player Stats
        </NavLink>
        <NavLink
          to="odds" // Use relative path
          className={({ isActive }) =>
            isActive
              ? "active-tab flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
              : "flex items-center gap-2 text-sm md:text-base leading-6 py-[14px] px-[24px] border border-[#DBE1E7] rounded-[100px] w-full md:w-fit"
          }
        >
          <IoIosFootball className="w-6 h-6" />
          Odds
        </NavLink>
      </nav>

      {/* Tab content */}
      <Routes>
        <Route path="preview" element={<GamePreview />} />
        <Route path="match-stats" element={<MatchStats />} />
        <Route path="team-stats" element={<TeamStats />} />
        <Route path="player-stats" element={<PlayerStats />} />
        <Route path="odds" element={<OddsTab />} />
      </Routes>
    </div>
  );
}

export default GamePage;
