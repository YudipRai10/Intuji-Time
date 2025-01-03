import React from "react";
import Duration from "../TabComponents/Duration";
import { CancelButton, SaveButton } from "../ui/button";
import BreakType from "../TabComponents/BreakType";
import Info from "../TabComponents/Info";
import { getUseForm } from "../../helper/useForm.helper";

interface BreakProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Break({ setShowModal }: BreakProps): React.ReactElement {
  const { register, handleSubmit, setValue, onSubmit } = getUseForm();

  return (
    <div id="break">
      {/* Info */}
      <Info tab="Break" />

      {/* Duration, Type, Buttons */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="break-input flex flex-col gap-5 mt-4"
      >
        <Duration register={register} setValue={setValue} />
        <BreakType register={register} setValue={setValue} />

        <div className="text-base font-extrabold flex justify-end items-center py-5 mt-10 border-t border-t-lightGray pr-8">
          <CancelButton setShowModal={setShowModal} />
          <SaveButton />
        </div>
      </form>
    </div>
  );
}

export default Break;
