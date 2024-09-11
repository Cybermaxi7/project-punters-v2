import React, { useEffect, useReducer } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Initial state for the reducer
const initialState = {
  selectedDate: new Date(),
};

// Reducer function to manage state transitions
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, selectedDate: action.payload };
    case "RESET_DATE":
      return { ...state, selectedDate: new Date() };
    default:
      return state;
  }
};

const Calendar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedDate } = state;

  // Side effect to log the selected date whenever it changes
  useEffect(() => {
    console.log(`Selected date changed: ${selectedDate}`);
  }, [selectedDate]);

  // Handler functions for date changes and resets
  const handleDateChange = (date) => {
    dispatch({ type: "SET_DATE", payload: date });
  };

  const handleResetDate = () => {
    dispatch({ type: "RESET_DATE" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-[#ffffff] p-4 rounded-lg shadow-lg w-full max-w-md lg:w-1/3">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          className="w-full "
          calendarClassName=" bg-white p-2 sm:p-4 rounded-lg shadow-lg"
          dayClassName={(date) =>
            date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()
              ? "selected-date"
              : "default-date"
          }
          renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <>
              {/* Header with Month and Year */}
              <div className="flex flex-warp justify-between items-center mb-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="btn btn-sm btn-ghost"
                >
                  <IoIosArrowBack />
                </button>
                <span className="text-lg font-semibold text-center flex-grow">
                  {date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="btn btn-sm btn-ghost"
                >
                  <IoIosArrowForward />
                </button>
              </div>

              {/* Date Input and Today Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2 w-full">
                <input
                  type="text"
                  value={selectedDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  readOnly
                  className="border border-gray-300 rounded p-2 w-full sm:w-auto h-10 bg-transparent text-center"
                />
                <button
                  onClick={handleResetDate}
                  className="btn btn-outline w-full h-10 rounded-[8px] py-[10px] px-[16px] sm:w-auto"
                >
                  Today
                </button>
              </div>
            </>
          )}
        />
        <div className="flex flex-col sm:flex-row  justify-between mt-4 gap-2">
          <button className="btn btn-outline w-full sm:w-1/2">Cancel</button>
          <button className="btn bg-[#1D994A] w-full sm:w-1/2 text-white border-none hover:bg-[#1D994A]">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
