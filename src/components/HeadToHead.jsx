export default function HeadToHead({ heading1, heading2 }) {
  return (
    <div className="w-full p-4 md:p-6 border-b border-[#DBE1E7] overflow-x-auto">
      <div className="min-w-[370px]">
        <div className="flex w-full justify-between items-center">
          <p className="text-[#1D994A] leading-[24px] font-medium text-sm">
            {heading1}
          </p>
          <p className="text-[#1D994A] leading-[24px] font-medium text-sm">
            {heading2}
          </p>
        </div>
        <div className="flex w-full max-w-[466px] mx-auto justify-between mt-1">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img src="/src/assets/germany-flag.svg" alt="germany flag" />
              <p className="text-[#2B2B2B] text-base font-medium">Germany</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="text-[#2B2B2B] text-base leading-6 font-semibold">
              4 - 0
            </div>
            <p className="text-[#4E4E4E] leading-[22px] text-sm">
              24 July, 2024
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/src/assets/scotland-flag.svg" alt="scotland flag" />
            <p className="text-[#2B2B2B] text-base font-medium">Scotland</p>
          </div>
        </div>
      </div>
    </div>
  );
}
