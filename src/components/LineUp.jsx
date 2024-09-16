const LineUp = () => {
  return (
    <div className="w-full h-[32rem] flex flex-col items-center card-stats-shadow  rounded-[8px]">
      {/* Lineup Header */}
      <div className="w-full pt-2 px-4">
        <h2 className="bg-white font-semibold text-[20px] leading-[30px]">
          LINE UP
        </h2>
      </div>

      {/* Formation Section */}
      <div className="w-full mt-4 flex flex-col  justify-between items-center">
        {/* Germany Formation */}
        <div className="flex px-4 items-center justify-between py-4 bg-[#D6F0E0] w-full">
          <div className="flex flex-col">
            <span className="text-[#1D1D1D] font-gilroy leading-[24px] text-base font-semibold">
              Germany
            </span>
            <span className="font-inter text=[#4E4E4E] leading-[18px] text-xs">
              First XI
            </span>
          </div>
          <span className="font-inter text-[#1D1D1D] text-[24px] leading-[36px] font-bold">
            4-4-2
          </span>
        </div>

        {/* Field */}
        <div className="relative bg-green-500  w-full max-w-96 mx-auto h-[32rem]">
          {/* Top Goal (with penalty and goal area) */}
          <div className="absolute border-t-2 border-white top-10 left-1/2 transform -translate-x-1/2 w-full">
            <div className="absolute top-[-32px] left-1/2 transform -translate-x-1/2 border-2 border-white w-16 h-8"></div>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32">
              {/* Penalty Area */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 border-2 border-t-0 border-white w-40 h-24"></div>
              {/* Goal Area */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 border-2 border-white w-24 h-16"></div>
            </div>
          </div>

          {/* Center Line */}
          <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>

          {/* Midfield Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full w-16 h-16"></div>

          {/* Bottom Goal (with penalty and goal area) */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full border-t-2">
            {/* Goal Post */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 border-2 border-white w-16 h-8"></div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32">
              {/* Penalty Area */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-2 border-b-1 border-white w-40 h-24"></div>
              {/* Goal Area */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 border-2 border-white w-24 h-16"></div>
            </div>
          </div>
        </div>

        {/* Scotland Formation */}
        <div className="flex px-4 items-center justify-between py-4 bg-[#D6F0E0] w-full">
          <div className="flex flex-col">
            <span className="text-[#1D1D1D] font-gilroy leading-[24px] text-base font-semibold">
              Scotland
            </span>
            <span className="font-inter text=[#4E4E4E] leading-[18px] text-xs">
              First XI
            </span>
          </div>
          <span className="font-inter text-[#1D1D1D] text-[24px] leading-[36px] font-bold">
            4-3-3
          </span>
        </div>
      </div>
    </div>
  );
};

export default LineUp;
