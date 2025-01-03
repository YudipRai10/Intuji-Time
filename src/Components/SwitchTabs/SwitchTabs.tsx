import React from "react";
import Internal from "../Tabs/Internal";
import External from "../Tabs/External";
import Break from "../Tabs/Break";
import Leave from "../Tabs/Leave";

interface SwitchTabsProps {
  activeTab: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function SwitchTabs({
  activeTab,
  setShowModal,
}: SwitchTabsProps): React.ReactElement | null {
  switch (activeTab) {
    case "Internal":
      return <Internal setShowModal={setShowModal} />;
    case "External":
      return <External setShowModal={setShowModal} />;
    case "Break":
      return <Break setShowModal={setShowModal} />;
    case "Leave":
      return <Leave setShowModal={setShowModal} />;
    default:
      return null;
  }
}

export default SwitchTabs;
