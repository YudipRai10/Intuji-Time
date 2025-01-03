import React from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InputProps } from "../../helper/useForm.helper";

interface InternalFocusProps {
  register: UseFormRegister<InputProps>;
  setValue: UseFormSetValue<InputProps>;
}

function InternalFocus({
  register,
  setValue,
}: InternalFocusProps): React.ReactElement {
  const focusList: string[] = [
    "Human Resources",
    "Huddles/Internal Meetings",
    "Sales",
    "Marketing",
    "Training/Learning",
    "Process Improvement",
  ];

  const handleFocusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFocus = event.target.value;
    setValue("internalFocus", selectedFocus);
  };

  return (
    <div className="flex flex-col gap-1 pl-6 pr-8">
      <p className="font-semibold text-sm text-pText">Focus Area</p>
      <div className="bg-lightGrayBg w-full py-3 px-4 text-pGray font-medium text-base flex justify-between items-center relative cursor-pointer rounded-lg">
        <select
          {...register("internalFocus")}
          onChange={handleFocusChange}
          className="border-none outline-none w-full h-full bg-lightGrayBg cursor-pointer"
        >
          {focusList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InternalFocus;
