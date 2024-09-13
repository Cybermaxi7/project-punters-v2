import { germanyTeam, scotlandTeam } from "../utils/stats";
import CardStats from "./CardStats";
import CardStatsRow from "./CardStatsRow";
import LineUp from "./LineUp";

export default function PlayerStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6   ">
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
      <LineUp />
    </div>
  );
}
