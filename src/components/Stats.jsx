import React from "react";
import CardStats from "./CardStats";
import CardStatsRow from "./CardStatsRow";
import {
  awayGoalStats,
  awayStats,
  germanyTeam,
  homeGoalStats,
  homeStats,
  otherAwayStats,
  otherHomeStats,
  scotlandTeam,
} from "../utils/stats";

export default function Stats() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        <CardStats heading="Home Card Statistics">
          {homeStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
        <CardStats heading="Away Card Statistics">
          {awayStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
        <CardStats heading="Home Goal Statistics">
          {homeGoalStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
        <CardStats heading="Away Goal Statistics">
          {awayGoalStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
        <CardStats heading="Other Statistics (Home)">
          {otherHomeStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
        <CardStats heading="Other Statistics (Away)">
          {otherAwayStats.map((data, index) => (
            <CardStatsRow key={index} text={data.text} value={data.value} />
          ))}
        </CardStats>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mt-5">
        <CardStats
          heading="Germany Starting XI"
          subHeading={true}
          hasGoals={true}
        >
          {germanyTeam.map((team, index) => (
            <CardStatsRow key={index} text={team.Player} value={team.Goals} />
          ))}
        </CardStats>
        <CardStats
          heading="Scotland Starting XI"
          subHeading={true}
          hasGoals={true}
        >
          {scotlandTeam.map((team, index) => (
            <CardStatsRow key={index} text={team.Player} value={team.Goals} />
          ))}
        </CardStats>
        <CardStats
          heading="Germany Starting XI"
          subHeading={true}
          hasGoals={false}
        >
          {scotlandTeam.map((team, index) => (
            <CardStatsRow
              key={index}
              text={team.Player}
              value={team.YellowCards}
            />
          ))}
        </CardStats>
        <CardStats
          heading="Scotland Starting XI"
          subHeading={true}
          hasGoals={false}
        >
          {scotlandTeam.map((team, index) => (
            <CardStatsRow
              key={index}
              text={team.Player}
              value={team.YellowCards}
            />
          ))}
        </CardStats>
      </div>
    </>
  );
}
