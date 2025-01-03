import React, { useContext, useState } from "react";
import TimeInput from "../TimeInput/TimeInput";
import TimeModal from "../PopupModal/TimeModal/TimeModal";
import SubmitModal from "../PopupModal/SubmitModal/SubmitModal";
import { TimeContext } from "../../Context/Context";
import SuccessModal from "../PopupModal/SuccessModal/SuccessModal";

function Timespread(): React.ReactElement {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const { successNoti } = useContext(TimeContext);

  return (
    <div className="bg-bodycolor min-h-screen">
      {/* Success Notification */}
      {successNoti && <SuccessModal />}

      <div className="flex justify-center items-center flex-col pb-18">
        {/* TimeSheet */}
        <div className="flex justify-center items-center w-full px-10 xl:px-0">
          <p className="font-semibold text-sm text-gmt -rotate-90">
            GMT +05.45
          </p>
          <div className="flex-grow max-w-contWidth h-contheight mr-20 py-5 overflow-y-auto scroll-smooth border border-red-500 hide-scrollbar">
            <TimeInput />
          </div>
        </div>

        {/* Submit Timesheet */}
        <div className="bg-white flex items-center justify-between mx-auto max-w-contWidth w-full px-10 lg:px-4 shadow-md rounded-2xl sticky bottom-2">
          <div className="py-5">
            <p className="text-xl font-extrabold">0hr 0min</p>
            <p className="text-sm font-medium">Total Working Hours</p>
          </div>
          <button
            onClick={() => {
              setSubmit(true);
              setFadeIn(true);
            }}
            disabled={successNoti}
            className="bg-submitBtn text-white text-base font-extrabold py-4 px-12 rounded-lg hover:shadow-lg"
          >
            Submit Timesheet
          </button>
        </div>
        <div
          className={`transition-all duration-300 ease-in ${
            fadeIn ? "animate-fadeIn" : ""
          }`}
        >
          {submit && <SubmitModal submit={submit} setSubmit={setSubmit} />}
        </div>

        <button onClick={() => setShowModal(!showModal)}>Open modal</button>
        {showModal && (
          <TimeModal setShowModal={setShowModal} showModal={showModal} />
        )}
      </div>
    </div>
  );
}

export default Timespread;
