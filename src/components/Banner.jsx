import { Link } from "react-router-dom";
import banner from "../assets/images/banner.jpg";
import { FaArrowTrendUp } from "react-icons/fa6";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div className="relative">
      <div data-aos="fade-up">
        <img
          src={banner}
          alt="banner"
          className="min-h-[50vh] lg:max-h-[80vh] w-full object-cover"
        />
        <div className="bg-gray-700 inset-0 absolute opacity-70"></div>
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <div data-aos="fade-down" className="mx-8 md:max-w-xl md:mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A064E]">
              Learn Together, Grow Faster
            </h2>
            <p className="text-lg text-gray-300 mt-4 mb-6">
              The best choice for your education.
            </p>
            <div>
              <Link to="/assignments">
                <button className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white border-none hover:text-black hover:bg-secondary">
                  Explore Now <FaArrowTrendUp />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
