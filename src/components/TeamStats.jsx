import {
    awayGoalStats,
    awayStats,
    homeGoalStats,
    homeStats,
    otherAwayStats,
    otherHomeStats,
} from "../utils/stats";
import CardStats from "./CardStats";
import CardStatsRow from "./CardStatsRow";
import LineUp from "./LineUp";

export default function TeamStats() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6 mt-8 mb-24 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 ">
                <CardStats heading="Home Card Statistics">
                    {homeStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
                <CardStats heading="Away Card Statistics">
                    {awayStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
                <CardStats heading="Home Goal Statistics">
                    {homeGoalStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
                <CardStats heading="Away Goal Statistics">
                    {awayGoalStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
                <CardStats heading="Other Statistics (Home)">
                    {otherHomeStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
                <CardStats heading="Other Statistics (Away)">
                    {otherAwayStats.map((data, index) => (
                        <CardStatsRow
                            key={index}
                            text={data.text}
                            value={data.value}
                        />
                    ))}
                </CardStats>
            </div>
            <LineUp />
        </div>
    );
}
