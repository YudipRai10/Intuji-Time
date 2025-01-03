import React, { useMemo, useState } from "react";
import arrow from "../../assets/icon-left.png";
import {
  getNextDate,
  getPrevDate,
  getTodayDate,
} from "../../helper/date.helper";

function Datebar(): React.ReactElement {
  const [showCalender, setShowCalender] = useState<boolean>(false);
  const currentDate: string = useMemo(() => {
    return getTodayDate();
  }, []);

  const prevDate: string = useMemo(() => {
    return getPrevDate();
  }, []);

  const nextDate: string = useMemo(() => {
    return getNextDate();
  }, []);

  return (
    <div className="bg-top w-full">
      {/* Previous Date Button */}
      <div className="flex justify-between items-center max-w-contWidth mx-auto py-3 px-10 xl:px-0">
        <div className="w-32">
          <button className="bg-lightGrayBg cursor-default text-center rounded-full flex gap-7 items-center w-12 h-12 pl-3.3 transition-all duration-500 ease-out overflow-hidden hover:w-32">
            <img src={arrow} alt="left-arrow" />
            <span className="text-base text-nowrap font-bold text-textRed">
              {prevDate}
            </span>
          </button>
        </div>

        {/* Current Date */}
        <p
          className="font-extrabold text-xl text-dateBlack tracking-wide cursor-pointer"
          onClick={() => setShowCalender(!showCalender)}
        >
          {currentDate}
        </p>
        {/* {showCalender && <Calender />} */}

        {/* Next Date Button */}
        <div className="w-32 flex justify-end">
          <button className="bg-lightGrayBg cursor-default text-start rounded-full flex gap-7 items-center w-12 h-12 transition-all duration-500 ease-out overflow-hidden hover:w-32 pr-3.3 flex-row-reverse">
            <img src={arrow} alt="right-arrow" className="rotate-180" />
            <span className="text-base text-nowrap font-bold text-textRed">
              {nextDate}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Datebar;
