import React, { useState } from "react";

// Sample data
const sampleData = [
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Small",
    prediction: "Home Win (4-0)",
  },
  {
    match: "Germany v Scotland",
    odds: [1.3, 1.3, 1.3],
    ou: [1.3, 1.3],
    btts: [1.3, 1.3],
    stakes: "Large",
    prediction: "Home Win (4-0)",
  },
  // Add more rows as needed
];

const PredictionTable = ({ data = sampleData, rowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOdds, setSelectedOdds] = useState({});

  // Pagination logic
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleButtonClick = (rowIndex, colIndex, type) => {
    setSelectedOdds({ rowIndex, colIndex, type });
  };

  const isButtonSelected = (rowIndex, colIndex, type) => {
    return (
      selectedOdds.rowIndex === rowIndex &&
      selectedOdds.colIndex === colIndex &&
      selectedOdds.type === type
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-[16px] font-600 font-inter text-[#2B2B2B] uppercase">
              EURO 2024
            </th>
            <th
              colSpan={3}
              className="px-4 py-2 text-left text-[16px] font-600 font-inter text-[#2B2B2B] uppercase"
            >
              Match Odds
            </th>
            <th
              colSpan={2}
              className="px-4 py-2 text-left text-[16px] font-600 font-inter text-[#2B2B2B] uppercase"
            >
              O/U 2.5
            </th>
            <th
              colSpan={2}
              className="px-4 py-2 text-left text-[16px] font-600 font-inter text-[#2B2B2B] uppercase"
            >
              BTTS
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"></th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"></th>
          </tr>
          <tr className="bg-gray-100 h-[64px] ">
            <th></th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">1</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">X</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">2</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">O</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">U</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">Y</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">N</th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">
              Stakes
            </th>
            <th className="px-2 py-1 text-500 text-[#2B2B2B] font-inter">
              Prediction/Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 h-[64px]">
              <td className="flex justify-left items-center px-2 py-1 whitespace-nowrap text-sm ">
                <input
                  type="radio"
                  name="match"
                  className="mr-2 radio radio-primary checked:bg-[#1D994A] checked:border-[#1D994A] border-[#DBE1E7]"
                />
                {row.match}
              </td>
              {row.odds.map((odds, colIndex) => (
                <td
                  key={colIndex}
                  className="px-2 py-1 whitespace-nowrap text-sm"
                >
                  <button
                    className={`btn hover:bg-[#cbf3da] btn-xs outline-none w-[40px] h-[31px] ${
                      isButtonSelected(rowIndex, colIndex, "odds")
                        ? "btn-primary bg-[#1D994A] text-[#f9f9f9] outline-none border-none"
                        : "btn-outline"
                    }`}
                    onClick={() =>
                      handleButtonClick(rowIndex, colIndex, "odds")
                    }
                  >
                    {odds}
                  </button>
                </td>
              ))}
              {row.ou.map((ou, colIndex) => (
                <td
                  key={colIndex}
                  className="px-2 py-1 whitespace-nowrap text-sm"
                >
                  <button
                    className={`btn hover:bg-[#cbf3da] btn-xs outline-none w-[40px] h-[31px] ${
                      isButtonSelected(rowIndex, colIndex, "ou")
                        ? "btn-primary bg-[#1D994A] text-[#f9f9f9] outline-none border-none"
                        : "btn-outline"
                    }`}
                    onClick={() => handleButtonClick(rowIndex, colIndex, "ou")}
                  >
                    {ou}
                  </button>
                </td>
              ))}
              {row.btts.map((btts, colIndex) => (
                <td
                  key={colIndex}
                  className="px-2 py-1 whitespace-nowrap text-sm"
                >
                  <button
                    className={`btn hover:bg-[#cbf3da] btn-xs outline-none w-[40px] h-[31px] ${
                      isButtonSelected(rowIndex, colIndex, "btts")
                        ? "btn-primary bg-[#1D994A] text-[#f9f9f9] outline-none border-none"
                        : "btn-outline"
                    }`}
                    onClick={() =>
                      handleButtonClick(rowIndex, colIndex, "btts")
                    }
                  >
                    {btts}
                  </button>
                </td>
              ))}
              <td className="px-2 py-1 whitespace-nowrap text-sm">
                {row.stakes}
              </td>
              <td className="px-2 py-1 whitespace-nowrap text-sm">
                {row.prediction}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-xs mx-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`btn border-none btn-xs mx-1 ${
              currentPage === i + 1 ? "btn-primary" : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn btn-xs mx-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PredictionTable;
