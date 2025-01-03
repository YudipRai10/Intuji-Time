import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputProps } from "../../useForm/useForm";

interface LeaveToggleProps {
  register: UseFormRegister<InputProps>;
  errors: FieldValues;
}

function LeaveToggle({
  register,
  errors,
}: LeaveToggleProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2 pl-6 pr-8 relative">
      {/* Toggle Button */}
      <div className="toggle flex items-center justify-center bg-white">
        <input
          {...register("leaveToggle", { required: "Please mark" })}
          type="checkbox"
          id="check"
          className="hidden"
        />
        <label
          htmlFor="check"
          className="toggle-btn bg-top w-11 h-5 rounded-toggle cursor-pointer relative"
        ></label>
      </div>
      <p className="text-pText font-semibold text-sm">
        Mark this as full day leave
      </p>

      {/* Error Message */}
      {errors.leaveToggle && (
        <p className="text-xs text-red absolute top-6">
          {errors.leaveToggle.message}
        </p>
      )}
    </div>
  );
}

export default LeaveToggle;
