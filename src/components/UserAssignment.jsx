import PropTypes from "prop-types";
import { motion } from "framer-motion";

const UserAssignment = ({ assignment }) => {
  const { status, title, mark, feedback, remark } = assignment || {};
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    className="rounded-lg bg-base-100 shadow-xl relative">
      <div className="card-body">
        <h2 className="card-title text-[#1A064E]">{title}</h2>
        <div className="font-medium">
          <p>
            FullMarks: <span className="text-gray-500">{mark}</span>
          </p>
          <p>
            Status: <span className="text-gray-500">{status}</span>
          </p>
          <p>
            Obtained Marks:{" "}
            <span className="text-gray-500">{remark ? remark : "N/A"}</span>
          </p>
          <p>
            Feedback:{" "}
            <span className="text-gray-500">{feedback ? feedback : "N/A"}</span>
          </p>
        </div>
      </div>
      
      <svg className="absolute bottom-0 rounded-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6440FA" fillOpacity="0.2" d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,128C840,107,960,117,1080,106.7C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </motion.div>
  );
};

UserAssignment.propTypes = {
  assignment: PropTypes.object,
};

export default UserAssignment;
