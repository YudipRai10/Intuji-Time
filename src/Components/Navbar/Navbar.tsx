import React from "react";
import intuji_logo from "../../assets/intuji-logo.png";
import profile_pic from "../../assets/profile-pic.png";

function Navbar(): React.ReactElement {
  return (
    <nav className="py-4 w-full">
      <div className="flex justify-between items-center max-w-contWidth mx-auto w-full px-10 xl:px-0">
        <img src={intuji_logo} alt="intuji logo" className="w-auto h-10" />
        <img src={profile_pic} alt="profile pic" className="rounded-full" />
      </div>
    </nav>
  );
}

export default Navbar;
