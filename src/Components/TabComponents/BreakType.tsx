import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { InputProps } from "../../useForm/useForm";

interface BreakTypeProps {
  register: UseFormRegister<InputProps>;
  setValue: UseFormSetValue<InputProps>;
}

function BreakType({ register, setValue }: BreakTypeProps): React.ReactElement {
  const typeList: string[] = ["Lunch/Tea Break", "Out Of Office"];
  const [selectType, setSelectType] = useState<string>("Lunch/Tea Break");

  return (
    <div className="flex flex-col gap-2 pl-6 pr-8">
      <p className="text-pText font-semibold text-sm">Type</p>

      {/* Select the Break Reason */}
      <div className="type-btn-div flex items-center gap-4">
        {typeList.map((item) => (
          <li
            key={item}
            className={`rounded-lg py-3 px-8 text-tabText font-medium text-base flex-grow list-none cursor-pointer text-center ${
              selectType === item
                ? "text-darkRed border-2 border-darkRed bg-darkRedBg"
                : "border-2 border-borderGray"
            }`}
            onClick={() => {
              setSelectType(item);
              setValue("breakType", item);
            }}
          >
            {item}
          </li>
        ))}
      </div>
      <input {...register("breakType")} type="hidden" value={selectType} />
    </div>
  );
}

export default BreakType;
