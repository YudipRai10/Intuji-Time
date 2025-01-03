import intuji_logo from "../../assets/intuji-logo.png";
import { Link } from "react-router-dom";
import React from "react";
import { GoogleButton } from "../../Components/ui/button";

function Login(): React.ReactElement {
  return (
    <div className="flex justify-center items-center bg-login_bg bg-no-repeat bg-cover bg-center h-screen">
      <div className="flex justify-center items-center mx-auto">
        <div
          className="flex justify-center items-center flex-col gap-y-14 bg-white  md:min-w-login rounded-xl shadow-md p-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Intuji Logo */}
          <img src={intuji_logo} alt="intuji-logo" className="object-cover" />

          <div className="flex flex-col items-center gap-y-10">
            <p className="font-bold text-2xl sm:text-4xl">
              Sign in to your account
            </p>

            {/* Button with Google image */}
            <Link to="/timesheet">
              <GoogleButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
