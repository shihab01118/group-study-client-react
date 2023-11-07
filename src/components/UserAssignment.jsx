import PropTypes from "prop-types";

const UserAssignment = ({ assignment }) => {
  const { status, title, mark, feedback, remark } = assignment || {};
  return (
    <div className="rounded-lg bg-base-100 shadow-xl">
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
    </div>
  );
};

UserAssignment.propTypes = {
  assignment: PropTypes.object,
};

export default UserAssignment;
