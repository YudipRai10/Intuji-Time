import React from "react";
import { CancelButton, SaveButton } from "../ui/button";
import Duration from "../TabComponents/Duration";
import Comment from "../TabComponents/Comment";
import ExternalClient from "../TabComponents/ExternalClient";
import ExternalFocus from "../TabComponents/ExternalFocus";
import Info from "../TabComponents/Info";
import { getUseForm } from "../../useForm/useForm";

interface ExternalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function External({ setShowModal }: ExternalProps): React.ReactElement {
  const { register, handleSubmit, setValue, onSubmit, errors } = getUseForm();

  return (
    <div id="external">
      {/* Info */}
      <Info tab="External" />

      {/* Duration, Client, Focus, Comment, Buttons */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="external-input flex flex-col gap-5 mt-4"
      >
        <Duration register={register} setValue={setValue} />
        <ExternalClient register={register} setValue={setValue} />
        <ExternalFocus register={register} setValue={setValue} />
        <Comment register={register} errors={errors} />

        <div className="submit-btns text-base font-extrabold flex justify-end items-center py-5 mt-10 border-t border-t-lightGray pr-8">
          <CancelButton setShowModal={setShowModal} />
          <SaveButton />
        </div>
      </form>
    </div>
  );
}

export default External;
