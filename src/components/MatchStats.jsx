import HeadToHead from "./HeadToHead";
import HeadToHeadContainer from "./HeadToHeadContainer";
import LineUp from "./LineUp";

export default function MatchStats() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-10">
      <div className="flex flex-col gap-4 mt-5 ">
        <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
          <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
            Head to head
          </h3>
          <HeadToHead
            heading1="EURO Final Stage"
            heading2="BVB Dortmund Staduim"
          />
          <HeadToHead
            heading1="EURO Final Stage"
            heading2="BVB Dortmund Staduim"
          />
          <HeadToHead
            heading1="EURO Final Stage"
            heading2="BVB Dortmund Staduim"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
              <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
                Germany Last 5 matches
              </h3>
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
            </div>
            <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
              <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
                Scotland Last 5 matches
              </h3>
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
            </div>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
              <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
                Germany Next 5 matches
              </h3>
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
            </div>
            <div className="w-full h-full border-[#DBE1E7] rounded-lg card-stats-shadow">
              <h3 className="border-b border-[#DBE1E7] p-4 md:p-5 bg-[#F7F8F9] font-inter text-[#2B2B2B] leading-7 md:leading-[30px] text-lg font-semibold md:text-xl">
                Scotland Next 5 matches
              </h3>
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
              <HeadToHead
                heading1="EURO Final Stage"
                heading2="BVB Dortmund Staduim"
              />
            </div>
          </div>
        </div>
      </div>
      <LineUp />
    </div>
  );
}
