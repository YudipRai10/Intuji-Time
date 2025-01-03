import React from "react";
import { CancelButton, SaveButton } from "../ui/button";
import Duration from "../TabComponents/Duration";
import InternalFocus from "../TabComponents/InternalFocus";
import Comment from "../TabComponents/Comment";
import Info from "../TabComponents/Info";
import { getUseForm } from "../../useForm/useForm";

interface InternalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Internal({ setShowModal }: InternalProps): React.ReactElement {
  const { register, handleSubmit, setValue, onSubmit, errors } = getUseForm();

  return (
    <div id="internal">
      {/* Info */}
      <Info tab="Internal" />

      {/* Duration, Focus, Comment, Buttons */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-4"
      >
        <Duration register={register} setValue={setValue} />
        <InternalFocus register={register} setValue={setValue} />
        <Comment register={register} errors={errors} />
        <div className="text-base font-extrabold flex justify-end items-center py-5 mt-10 border-t border-t-lightGray pr-8">
          <CancelButton setShowModal={setShowModal} />
          <SaveButton />
        </div>
      </form>
    </div>
  );
}

export default Internal;
