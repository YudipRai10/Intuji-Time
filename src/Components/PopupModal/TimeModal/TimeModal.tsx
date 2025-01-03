import React, { useState } from "react";
import clock from "../../../assets/clock.png";
import cross from "../../../assets/cross.png";
import SwitchTabs from "../../SwitchTabs/SwitchTabs";

interface TimeModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

function TimeModal({
  setShowModal,
  showModal,
}: TimeModalProps): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>("Internal");
  const [isTabSwitching, setIsTabIsSwitching] = useState<boolean>(false);
  const tabs: string[] = ["Internal", "External", "Break", "Leave"];

  const handleTabChange = (tab: string) => {
    setIsTabIsSwitching(true);
    setActiveTab(tab);
  };

  return (
    <>
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 transition-all duration-300 ease-in-out ${
          showModal ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-timeModal max-w-[80%] transition-all duration-200 ease-in-out shadow-lg flex flex-col"
        id="modal"
      >
        <div className="flex flex-col items-center px-6 gap-2 pt-2.5 bg-lightGrayBg rounded-t-xl">
          {/* Time Modal Header */}
          <div className="flex items-center w-full justify-between mt-2">
            <div className="flex items-start gap-3">
              <img src={clock} alt="clock" className="object-contain w-5" />
              <p className="font-extrabold text-xl text-timeLog">Time Log</p>
            </div>

            <button
              className="border-none outline-none flex justify-center items-center"
              onClick={() => setShowModal(false)}
            >
              <img
                data-close-button
                src={cross}
                alt="cross"
                className="cursor-pointer"
              />
            </button>
          </div>

          {/* Time Modal Tabs */}
          <div className="flex items-center gap-4 w-full relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`font-bold text-base w-28 text-center py-2 cursor-pointer text-tabText ${
                  activeTab === tab
                    ? "border-b-2 border-activeTab text-activeTab"
                    : ""
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Time Modal Body */}
        <div>
          <div className="flex flex-col flex-grow bg-white">
            <div
              className={`rounded-b-xl transition-all duration-300 ease-in-out ${
                isTabSwitching ? "animate-moving" : ""
              }`}
              onAnimationEnd={() => setIsTabIsSwitching(false)}
            >
              {/* TODO: Refactor this */}
              <SwitchTabs activeTab={activeTab} setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeModal;
