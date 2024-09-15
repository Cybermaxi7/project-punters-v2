import FilterBar from "./FilterBar";
import PredictionTable from "./PredictionTable";

export default function BestBet() {
    return (
        <section
            id="best-bets"
            className="w-full max-w-[1440px] mx-auto  p-4 md:p-8 lg:p-12"
        >
            {/* Header and Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <h1 className="whitespace-nowrap text-[32px] font-gilroy font-bold mb-4 md:mb-0">
                    Best Bets
                </h1>
                <FilterBar />
            </div>

            {/* Content Section with Table and Calendar */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Table */}
                <div className="flex-1 overflow-auto">
                    <PredictionTable />
                </div>

                {/* Calendar */}
                <div className="w-full md:w-1/3"></div>
            </div>
        </section>
    );
}
