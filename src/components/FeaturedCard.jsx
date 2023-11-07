import PropTypes from "prop-types";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";

const FeaturedCard = ({ feature }) => {
  const { image, title, description, featured_content } = feature || {};

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div data-aos="fade-up" className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div data-aos="fade-down" className="card-body rounded-xl">
        <h2 className="card-title text-base-400">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <p className="text-gray-300">{featured_content}</p>
        <div className="card-actions justify-center text-gray-300">
          <button className="underline hover:text-secondary">More</button>
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  feature: PropTypes.object,
};

export default FeaturedCard;
