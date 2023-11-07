import { Box, Modal } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const SubmittedCard = ({ assignment, refetch }) => {
  const [open, setOpen] = useState(false);
  const [remark, setRemark] = useState("");
  const [feedback, setFeedback] = useState("");
 
  const { _id, pdfUrl, note, title, imgUrl, mark, examineeName } =
    assignment || {};

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const checkedAssignment = {remark, feedback, status: "Completed"}
    axios
      .put(`http://localhost:5000/api/v1/user/submitted_assignments/${_id}`, checkedAssignment)
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          handleClose();
          refetch();
        }
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-2/5">
        <img src={imgUrl} alt={title} className="h-full" />
      </figure>
      <div className="p-5 w-3/5">
        <h2 className="card-title text-[#1A064E]">{title}</h2>
        <div className="my-4 space-y-2">
          <p className="font-medium text-gray-500">
            Full Marks: <span>{mark}</span>
          </p>
          <p className="font-medium text-gray-500">
            Examinee: <span>{examineeName}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleOpen}
            className="btn bg-[#6440FA] rounded-lg capitalize font-semibold text-white hover:text-black hover:bg-secondary"
          >
            Give Mark
          </button>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style} className="rounded-lg p-5">
              <h2 className="text-xl font-semibold text-[#1A064E] text-center">
                Check Assignment
              </h2>
              <div className="mt-5 space-y-2">
                <p className="font-semibold">
                  Attached Link:{" "}
                  <a href={pdfUrl} className="text-sm font-normal">
                    {pdfUrl}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Note:</span> {note}
                </p>
              </div>
              <hr className="border-gray-400 my-4" />
              <form onSubmit={handleConfirm}>
                <div className="flex items-center mb-3 gap-2">
                  <label htmlFor="remark" className="font-medium">
                    Remark:
                  </label>
                  <input
                    id="remark"
                    type="text"
                    onBlur={e => setRemark(e.target.value)}
                    className="outline-none text-sm md:text-base border-b h-5 border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="feedback" className="px-0 font-medium">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    onBlur={e => setFeedback(e.target.value)}
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
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

SubmittedCard.propTypes = {
  assignment: PropTypes.object,
  refetch: PropTypes.func,
};

export default SubmittedCard;
