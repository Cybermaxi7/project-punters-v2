import LineUp from "./LineUp";
import OddsCard from "./OddsCard";
export default function OddsTab() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6 mt-8  ">
            <div className="grid grid-cols-1 gap-6">
                <OddsCard
                    heading="Full time Result:"
                    odds1="3.23"
                    oddsX="3.23"
                    odds2="3.23"
                />

                <OddsCard
                    heading="Double Chances:"
                    odds1="3.23"
                    oddsX="3.23"
                    odds2="3.23"
                />
                <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-6">
                    <OddsCard
                        heading="Both Teams To Score:"
                        odds1="3.23"
                        oddsX="3.23"
                    />
                    <OddsCard heading="Odd/Even:" odds1="3.23" oddsX="3.23" />
                </div>

                <OddsCard
                    heading="Corners Odd/Even:"
                    odds1="3.23"
                    oddsX="3.23"
                    odds2="3.23"
                />

                <OddsCard
                    heading="Halftime/Fulltime:"
                    odds1="3.23"
                    oddsX="3.23"
                    odds2="3.23"
                />
            </div>

            <LineUp />
        </div>
    );
}
