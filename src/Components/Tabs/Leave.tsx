import React from "react";
import { CancelButton, SaveButton } from "../ui/button";
import LeaveToggle from "../TabComponents/LeaveToggle";
import LeaveType from "../TabComponents/LeaveType";
import Info from "../TabComponents/Info";
import { getUseForm } from "../../useForm/useForm";

interface LeaveProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Leave({ setShowModal }: LeaveProps): React.ReactElement {
  const { register, handleSubmit, errors, onSubmit } = getUseForm();

  return (
    <div id="leave">
      {/* Info */}
      <Info tab="Leave" />

      {/* Toggle, Duration, Type, Buttons */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-4"
      >
        <LeaveToggle register={register} errors={errors} />
        <LeaveType register={register} />

        <div className="text-base font-extrabold flex justify-end items-center py-5 mt-10 border-t border-t-lightGray pr-8">
          <CancelButton setShowModal={setShowModal} />
          <SaveButton />
        </div>
      </form>
    </div>
  );
}

export default Leave;
