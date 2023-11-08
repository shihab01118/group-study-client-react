import { useEffect } from "react";
import { useState } from "react";
import FeaturedCard from "./FeaturedCard";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("https://group-study-server.vercel.app/api/v1/user/featured")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="lg:max-w-6xl mx-8 md:mx-16 lg:mx-auto my-16 md:my-20 lg:my-24">
      <div className="text-center space-y-5 mb-14">
        <h4 className="text-lg uppercase font-semibold text-[#6440FA] tracking-widest">
          feature
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A064E]">
          Our Featured Area
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeaturedCard key={feature._id} feature={feature}></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
