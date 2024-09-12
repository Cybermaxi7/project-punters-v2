import React, { useEffect, useReducer } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialState = {
  selectedDate: new Date(),
};

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

  useEffect(() => {
    console.log(`Selected date changed: ${selectedDate}`);
  }, [selectedDate]);

  const handleDateChange = (date) => {
    dispatch({ type: "SET_DATE", payload: date });
  };

  const handleResetDate = () => {
    dispatch({ type: "RESET_DATE" });
  };

  return (
    <div className="p-4">
      <div className="bg-none p-4 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          className="w-full"
          calendarClassName="bg-none rounded-lg shadow-lg p-2"
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
              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="p-1 rounded hover:bg-gray-200"
                >
                  <IoIosArrowBack />
                </button>
                <span className="text-lg font-semibold">
                  {date.toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="p-1 rounded hover:bg-gray-200"
                >
                  <IoIosArrowForward />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-2">
                <input
                  type="text"
                  value={selectedDate.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  readOnly
                  className="border border-gray-300 rounded p-2 text-center w-full sm:w-auto"
                />
                <button
                  onClick={handleResetDate}
                  className="btn btn-outline rounded py-2 px-4"
                >
                  Today
                </button>
              </div>
            </>
          )}
        />
        <div className="flex flex-col sm:flex-row justify-between mt-4 gap-2">
          <button className="btn btn-outline w-full sm:w-auto">Cancel</button>
          <button className="btn bg-[#1D994A] w-full sm:w-auto text-white hover:bg-[#1D994A]">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
