import React, { useContext } from "react";
import cross from "../../../assets/cross.png";
import { SubmitCancelButton, SubmitConfirmButton } from "../../ui/button";
import { TimeContext } from "../../../Context/Context";

interface SubmitModalProps {
  submit: boolean;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

function SubmitModal({
  setSubmit,
  submit,
}: SubmitModalProps): React.ReactElement {
  const { setSuccessNoti } = useContext(TimeContext);

  return (
    <>
      <div
        id="overlay-submit"
        className={`fixed top-0 right-0 left-0 bottom-0 bg-[#00000080] pointer-events-none transition-all duration-200 ease-in-out ${
          submit ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      <div
        className={`submit-modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex flex-col rounded-xl w-submitModal max-w-[80%] transition-all duration-200 ease-in-out shadow-lg pointer-events-auto`}
        id="submit-modal"
      >
        {/* Submit Modal Header */}
        <div className="submit-modal-header py-2 px-6 flex justify-between items-center bg-lightGrayBg border-b border-b-lightGray rounded-t-xl">
          <p className="submit-title font-extrabold text-xl py-2.5 text-timeLog">
            Submit Timesheet
          </p>
          <button
            onClick={() => {
              setSubmit(false);
            }}
          >
            <img src={cross} alt="cross" />
          </button>
        </div>

        {/* Submit Modal Body */}
        <div className="submit-modal-body py-10 px-6 bg-white">
          <p className="font-medium text-lg text-tabText">
            You're all set to submit your timesheet. Just a heads up, once you
            hit confirm, you won't be able to change or resubmit it. Are you
            sure you want to go ahead?
          </p>
        </div>

        {/* Submit Modal Submit Buttons */}
        <div className="submit-btns-container border border-lightGray flex items-center justify-end py-5 pr-8 rounded-b-xl bg-white">
          <SubmitCancelButton setSubmit={setSubmit} />
          <SubmitConfirmButton
            setSuccessNoti={setSuccessNoti}
            setSubmit={setSubmit}
          />
        </div>
      </div>
    </>
  );
}

export default SubmitModal;
