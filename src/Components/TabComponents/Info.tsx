import React from "react";
import info from "../../assets/info.png";

interface InfoProps {
  tab: "Internal" | "External" | "Break" | "Leave";
}

function Info({ tab }: InfoProps): React.ReactElement {
  let infoText = "";
  // Switch between different Tabs
  switch (tab) {
    case "Internal":
      infoText = "Time or events allocated to internal company matters.";
      break;
    case "External":
      infoText = "Time or events associated with an active client project.";
      break;
    case "Break":
      infoText = "Time allocated by the company for work breaks.";
      break;
    case "Leave":
      infoText = "Time designated for employee leaves or absences.";
      break;
  }
  return (
    <div className="flex gap-1 items-center py-2 pl-6 pr-8 mt-4">
      <img src={info} alt="info" className="object-contain" />
      <p className="text-base font-medium text-tabText">{infoText}</p>
    </div>
  );
}

export default Info;
