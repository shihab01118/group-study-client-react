import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidUserAccount } from "react-icons/bi";
import signup_image from "../assets/images/signup.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      imgURL,
    };
    console.log(user);
  };

  return (
    <div className="max-w-4xl mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl my-16 md:my-20 lg:my-24 p-10 md:p-16 flex flex-col-reverse md:flex-row md:gap-8 lg:gap-20">
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A064E]">
          Sign up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-5">
            <FaUser className="text-sm" />
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none text-sm md:text-base"
              onBlur={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="flex gap-3 items-center border-gray-400 border-b py-2 mb-7">
            <BiSolidUserAccount className="text-sm" />
            <input
              type="url"
              placeholder="Your Image URL"
              className="outline-none text-sm md:text-base"
              onBlur={(e) => setImgURL(e.target.value)}
              required
            />
          </div>
          <div className="">
            <button className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white hover:text-black hover:bg-secondary">
              Sign Up
            </button>
            <Link to="/login">
              <p className="underline font-medium mt-5 text-gray-500 hover:text-[#6440FA] md:hidden">
                I am already a member
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <img src={signup_image} alt="sign up" />
        <Link to="/login">
          <p className="underline font-medium text-center pt-3 text-gray-500 hover:text-[#6440FA] hidden md:block">
            I am already a member
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
