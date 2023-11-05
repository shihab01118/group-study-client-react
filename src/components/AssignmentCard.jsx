import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from "react";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, mark, imgUrl, level } = assignment || {};

  useEffect(() => {
    Aos.init({duration: 1500})
  }, [])

  return (
    <div data-aos="fade-up" className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={imgUrl}
          alt={title}
        />
      </figure>
      <div className="card-body flex justify-center items-center">
        <div className="space-y-5">
        <h2 className="card-title text-base-400">{title}</h2>
        <div>
        <p className="text-gray-300 mb-3">Difficulty: {level}</p>
        <p className="text-gray-300">Total Marks: {mark}</p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/assignment_details/${_id}`}>
          <button className="btn bg-[#6440FA] rounded-lg capitalize font-semibold text-white border-none hover:text-black hover:bg-secondary btn-sm">View</button>
          </Link>
          <button className="btn bg-primary rounded-lg capitalize font-semibold text-white border-none hover:text-black hover:bg-secondary btn-sm">Update</button>
        </div>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
};

export default AssignmentCard;
