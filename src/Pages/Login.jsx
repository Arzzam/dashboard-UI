import React, { useState } from "react";
import GoogleSvg from "../assets/GoogleSvg";
import AppleSvg from "../assets/AppleSvg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // if (email === "xyz@gmail.com" && password === "12345") {
    //   navigate("/dashboard");
    // } else {
    //   alert("Invalid Email or Password");
    // }
    // console.log(email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-row">
      <div className="w-2/3 bg-black text-white flex items-center justify-center h-screen">
        <p className="font-Montserrat font-bold text-7xl">Board.</p>
      </div>
      <div className="w-full bg-[#F5F5F5] h-screen flex justify-center items-center">
        <div className="w-385 m-auto">
          <div className="">
            <h2 className="font-Montserrat font-bold text-4xl mb-1 pb-0.5">
              Sign in
            </h2>
            <h4 className="font-Lato">Sign in to your account</h4>
            <div className="flex justify-between my-7">
              <button className="font-normal text-xs bg-white text-[#858585] rounded-xl py-2 px-3 ">
                <GoogleSvg className="h-3 w-3 inline-block pb-0.5" /> Sign in
                with Google Account
              </button>
              <button className="font-normal text-xs bg-white text-[#858585] rounded-xl py-2 px-3">
                <AppleSvg className="h-3 w-3 inline-block pb-0.5 mr-0.5" />
                Sign in with Apple Account
              </button>
            </div>
          </div>
          <div className="bg-white mt-8 rounded-3xl ">
            <form className="p-8" onSubmit={handleSubmit}>
              <div className="mb-4 font-Lato">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-Lato text-black"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#F5F5F5] w-full py-2.5 px-3.5 rounded-lg block "
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 font-Lato">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base font-Lato text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-[#F5F5F5] w-full py-2.5 px-3.5 rounded-lg block"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <a
                  href="#"
                  className="font-Lato text-sm font-medium text-[#346BD5] hover:text-[#2f60ba] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="font-Montserrat font-bold w-full text-white bg-black rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="text-center pt-5 font-Lato text-base">
            <p className="text-[#858585]">
              Don't have an account?{" "}
              <a
                href="#"
                className="hover:underline text-[#346BD4]  hover:text-[#2f60ba]"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
