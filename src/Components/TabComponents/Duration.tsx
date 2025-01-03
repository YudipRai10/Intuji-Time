import React, { useMemo, useState } from "react";
import { getTimes } from "../../helper/time.helper";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InputProps } from "../../helper/useForm.helper";

interface DurationProps {
  register: UseFormRegister<InputProps>;
  setValue: UseFormSetValue<InputProps>;
}

function Duration({ register, setValue }: DurationProps): React.ReactElement {
  // Get both startTime and endTime from getTimes
  const times = useMemo(() => {
    return getTimes();
  }, []);

  // Initialize default startTime and endTime
  const [selectedStartTime, setSelectedStartTime] = useState<string>(
    times[0].startTime
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string>(
    times[0].endTime
  );
  // Toggle the dropdown menu for Times
  const [showTime, setShowTime] = useState<boolean>(false);

  // Select startTtime and update its corresponding endTime
  const handleSelectStartTime = (startTime: string) => {
    setSelectedStartTime(startTime);
    setValue("startTime", startTime);

    // Find the selected startTime in the times array
    const selectedTime = times.find((time) => time.startTime === startTime);

    // If there is startTime selected inside the times array, we can return its endTime
    if (selectedTime) {
      setSelectedEndTime(selectedTime.endTime);
      setValue("endTime", selectedTime.endTime);
    }
    setShowTime(false);
  };

  return (
    <div className="flex flex-col gap-2 pl-6 pr-8">
      <p className="font-semibold text-sm text-pText">Duration</p>

      <div className="flex justify-start items-center gap-5">
        {/* Start Time Dropdown */}
        <div
          onClick={() => setShowTime(!showTime)}
          className={`w-24 text-center bg-lightGrayBg font-medium text-base p-2 text-pGray rounded-lg relative cursor-pointer border border-lightGray ${
            showTime ? "border border-[#d6d3d1] shadow-md" : ""
          }`}
        >
          <span>{selectedStartTime}</span>
          <ul
            className={`absolute top-12 left-0 overflow-y-scroll h-[272px] z-50 w-[200px] shadow-lg bg-white py-4 px-2 rounded-lg ${
              showTime ? "block" : "hidden"
            }`}
          >
            {times.map((time) => (
              <li
                key={time.startTime}
                onClick={() => handleSelectStartTime(time.startTime)}
                className="font-medium text-base text-left p-2 cursor-pointer text-pGray rounded-lg hover:bg-listHover"
              >
                {time.startTime}
              </li>
            ))}
          </ul>
        </div>

        <p>-</p>

        {/* End Time Display */}
        <div className="w-24 text-center bg-lightGrayBg font-medium text-base p-2 text-pGray rounded-lg relative border border-lightGray">
          <span>{selectedEndTime}</span>
        </div>
      </div>

      {/* Register startTime and endTime with react-hook-form */}
      <input
        {...register("startTime")}
        value={selectedStartTime}
        type="hidden"
      />
      <input {...register("endTime")} value={selectedEndTime} type="hidden" />
    </div>
  );
}

export default Duration;
