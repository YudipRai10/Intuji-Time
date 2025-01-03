import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Datebar from "../../Components/Datebar/Datebar";
import Timespread from "../../Components/Timespead/Timespread";

function Timesheet(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Datebar />
      <Timespread />
    </>
  );
}

export default Timesheet;
