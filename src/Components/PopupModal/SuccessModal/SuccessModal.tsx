import React from "react";

function SuccessModal(): React.ReactElement {
  return (
    <div
      className="success-modal absolute top-9.5 left-0 w-full text-center bg-successGreen py-5 z-10 pointer-events-none transitio 0.5s ease-in"
      id="success-modal"
    >
      <p className="success-text text-white text-base font-extrabold">
        Timesheet for the day has been submitted successfully
      </p>
    </div>
  );
}

export default SuccessModal;
