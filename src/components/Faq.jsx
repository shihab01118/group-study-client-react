import Lottie from "lottie-react";
import Accordions from "./Accordions";
import faq_animation from "../assets/animations/faq_animation.json";

const Faq = () => {
  return (
    <div className="max-w-6xl mx-auto my-24">
        <div className="text-center space-y-5 mb-14">
            <h4 className="text-lg uppercase font-semibold text-[#6440FA] tracking-widest">Our faq</h4>
            <h2 className="text-3xl font-bold text-[#1A064E]">Frequently Asked Questions</h2>
        </div>
      <div className="flex flex-col gap-6 md:flex-row items-center">
        <div className="flex-1">
          <Accordions />
        </div>
        <div className="flex-1">
          <Lottie animationData={faq_animation} loop={false} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
