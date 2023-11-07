import { Box, Modal } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
  const [pdfUrl, setPdfUrl] = useState("");
  const [note, setNote] = useState("");

  const assignment = useLoaderData();
  const { title, description, mark, imgUrl, level, dueDate } = assignment || {};

  const { user } = useAuth();
  const examineeEmail = user.email;
  const examineeName = user.displayName;
  const status = "Pending";

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const submittedAssignment = {
      pdfUrl,
      note,
      status,
      title,
      imgUrl,
      mark,
      examineeName,
      examineeEmail,
    };

    axios
      .post(
        "https://group-study-server.vercel.app/api/v1/user/submitted_assignments",
        submittedAssignment
      )
      .then((res) => {
        const data = res.data;
        // console.log(data);
        if (data.insertedId) {
          toast.success("Assignment Submitted Successfully!");
          form.reset();
          setOpen(false);
        }
      });
  };

  return (
    <div className="card max-w-md mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-20 bg-base-100 shadow-xl rounded-lg">
      <figure>
        <img src={imgUrl} alt={title} className="h-[220px] w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#1A064E]">{title}</h2>
        <div className="space-y-2 text-gray-600 font-medium">
          <p className="font-normal">{description}</p>
          <p>
            Total Marks: <span className="font-normal">{mark}</span>
          </p>
          <p>
            Difficulty: <span className="font-normal">{level}</span>
          </p>
          <p>
            Due Date:{" "}
            <span className="font-normal">{dueDate.slice(0, 10)}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={handleOpen}
            className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white border-none hover:text-black hover:bg-secondary"
          >
            Take Assignment
          </button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style} className="rounded-lg relative">
              <h2 className="text-xl font-semibold text-[#1A064E]">
                Submit Assignment
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="border-gray-400 border-b p-2 mb-2">
                  <input
                    type="url"
                    placeholder="pdf URL"
                    onBlur={(e) => setPdfUrl(e.target.value)}
                    className="outline-none text-sm md:text-base w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="note"
                    className="label px-0 text-gray-600 font-medium"
                  >
                    Quick Note
                  </label>
                  <textarea
                    id="note"
                    onBlur={(e) => setNote(e.target.value)}
                    className="textarea mt-2 px-2 py-0 border-gray-400 rounded-lg w-full h-20 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="submit"
                    className="btn bg-[#6440FA] rounded-md capitalize font-semibold text-white border-none hover:text-black hover:bg-secondary btn-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <button
                onClick={handleClose}
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
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
