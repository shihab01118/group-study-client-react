import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TbMailFilled } from "react-icons/tb";
import login_image from "../assets/images/signin.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
  };
  return (
    <div className="max-w-4xl mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl my-16 md:my-20 lg:my-24 p-10 md:p-16 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-20">
      <div>
        <img src={login_image} alt="sign up" />
        <p className="mt-5 text-center text-gray-500 hidden md:block">
          <Link
            className="font-medium  hover:text-[#6440FA] hover:underline"
            to="/register"
          >
            Create an account
          </Link>
        </p>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A064E]">
          Sign In
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
            <TbMailFilled className="text-sm" />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none text-sm md:text-base"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
            <FaLock className="text-sm" />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none text-sm md:text-base"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pt-6">
            <button
              type="submit"
              className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white hover:text-black hover:bg-secondary"
            >
              Sign In
            </button>
            <p className="mt-5 text-center text-gray-500 md:hidden">
              <Link
                className="font-medium hover:text-[#6440FA] hover:underline"
                to="/register"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
        <div className="flex gap-5 mt-6 md:mt-10 items-center w-fit mx-auto md:mx-0">
          <p>Or login with</p>
          <div className="flex gap-3">
            <button className="text-3xl">
              <FcGoogle />
            </button>
            <button className="btn text-white bg-[#3B5998] rounded-lg btn-square btn-sm">
              <FaFacebookF />
            </button>
            <button className="btn text-white bg-[#1DA0F2] rounded-lg btn-square btn-sm">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
