import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AssignmentCard = ({ assignment, refetch }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { _id, title, mark, imgUrl, level, email } = assignment || {};

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const handleDelete = () => {
    const userEmail = user?.email;
    if (!userEmail) {
      navigate("/login");
    } else if (email === userEmail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://group-study-server.vercel.app/api/v1/user/assignments/${_id}`
            )
            .then((res) => {
              const data = res.data;
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Assignment has been deleted.",
                  icon: "success",
                });
                refetch();
              }
            });
        }
      });
    } else {
      toast.error("You can not delete this assignment");
    }
  };

  const handleUpdate = () => {
    const userEmail = user?.email;
    if (!userEmail) {
      navigate("/login");
    } else if (userEmail === email) {
      navigate(`/upadate_assignment/${_id}`);
    } else {
      toast.error("You can not update this assignment");
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 relative rounded-lg shadow-xl image-full"
    >
      <figure>
        <img src={imgUrl} alt={title} className="h-[200px] w-full" />
      </figure>
      <div data-aos="fade-down" className="card-body">
        <div className="space-y-5">
          <h2 className="card-title">{title}</h2>
          <div>
            <p className="text-gray-300 mb-3">Difficulty: {level}</p>
            <p className="text-gray-300">Total Marks: {mark}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/assignment_details/${_id}`}>
              <button className="btn bg-[#6440FA] rounded-lg capitalize font-semibold text-white border-none hover:text-black hover:bg-secondary btn-sm">
                View
              </button>
            </Link>
            {/* <Link to={`/upadate_assignment/${_id}`}> */}
            <button
              onClick={handleUpdate}
              className="btn bg-primary rounded-lg capitalize font-semibold text-white border-none hover:text-black hover:bg-secondary btn-sm"
            >
              Update
            </button>
            {/* </Link> */}
            <button
              onClick={handleDelete}
              className="absolute top-3 right-3 btn btn-sm btn-circle border-0 hover:bg-red-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0"></div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
  refetch: PropTypes.func,
};

export default AssignmentCard;
