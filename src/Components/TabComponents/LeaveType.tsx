import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { InputProps } from "../../useForm/useForm";

interface LeaveTypeProps {
  register: UseFormRegister<InputProps>;
}

function LeaveType({ register }: LeaveTypeProps): React.ReactElement {
  const leaveReason: string[] = [
    "Sick Leave",
    "Home Leave",
    "Unpaid Leave",
    "Bonus Leave",
    "Optional Public Leave",
  ];
  const [selectedLeave, setSelectedLeave] = useState<string>(leaveReason[0]);

  // To select input radio type tag
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLeave(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 pl-6 pr-8">
      <p className="text-pText font-semibold text-sm">Type</p>
      <div className="flex flex-col gap-6">
        {leaveReason.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <input
              type="radio"
              id={item}
              value={item}
              checked={selectedLeave === item}
              {...register("leaveReason")}
              onChange={handleChange}
              className="w-4 h-4 accent-accentBlue cursor-pointer"
            />
            <label
              htmlFor={item}
              className="text-labelGray font-semibold text-base"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaveType;
