import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InputProps } from "../../helper/useForm.helper";

interface ExternalFocusProps {
  register: UseFormRegister<InputProps>;
  setValue: UseFormSetValue<InputProps>;
}

function ExternalFocus({
  register,
  setValue,
}: ExternalFocusProps): React.ReactElement {
  const externalFocus: string[] = [
    "Design",
    "Develpment",
    "QA",
    "Meeting",
    "Project Planning",
    "Research",
  ];
  const [selectExFocus, setSelectExFocus] = useState<string>(externalFocus[0]);
  return (
    <div className="flex flex-col gap-2 pl-6 pr-8">
      <p className="text-pText font-semibold text-sm">Focus Area</p>

      {/* Select the Focus */}
      <div className="flex flex-wrap gap-4">
        {externalFocus.map((item) => (
          <li
            key={item}
            className={`rounded-lg py-3 px-8 font-medium text-base text-[#78716c] cursor-pointer list-none ${
              selectExFocus === item
                ? "text-darkRed border-2 border-darkRed bg-darkRedBg"
                : "border-2 border-borderGray"
            }`}
            onClick={() => {
              setSelectExFocus(item);
              setValue("externalFocus", item);
            }}
          >
            {item}
          </li>
        ))}
      </div>

      <input
        {...register("externalClient")}
        type="hidden"
        value={selectExFocus}
      />
    </div>
  );
}

export default ExternalFocus;
