export default function HeadToHead({
    heading1,
    heading2,
    match,
    teamOne,
    teamTwo,
}) {
    console.log(match);
    return (
        <div
            className="w-full p-4 md:p-6 border-b border-[#DBE1E7] overflow-x-auto"
            data-aos="fade-up"
        >
            <div className="min-w-[370px]">
                <div className="flex w-full justify-between items-center">
                    {/* Heading 1 and Heading 2 */}
                    <p className="text-[#1D994A] leading-[24px] font-medium text-sm">
                        {heading1}
                    </p>
                    <p className="text-[#1D994A] leading-[24px] font-medium text-sm">
                        {heading2}
                    </p>
                </div>

                {/* Team names and score */}
                <div className="flex w-full max-w-[466px] mx-auto justify-between mt-1">
                    {/* Team 1 - Germany */}
                    <div className="flex items-center">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-8 h-8 rounded-full object-cover"
                                src={match.flags.homeFlag}
                                alt="germany flag"
                            />
                            <p className="text-[#2B2B2B] text-base font-medium">
                                {teamOne}
                            </p>
                        </div>
                    </div>

                    {/* Match score and date */}
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="text-[#2B2B2B] text-base leading-6 font-semibold">
                            {match.score}
                        </div>
                        <p className="text-[#4E4E4E] leading-[22px] text-sm">
                            {match.date}
                        </p>
                    </div>

                    {/* Team 2 - Scotland */}
                    <div className="flex items-center gap-3">
                        <img
                            className="w-8 h-8 rounded-full object-cover"
                            src={match.flags.opponentFlag}
                            alt="scotland flag"
                        />
                        <p className="text-[#2B2B2B] text-base font-medium">
                            {teamTwo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
