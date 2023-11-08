import { Box, Modal } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const SubmittedCard = ({ assignment, refetch }) => {
  const [open, setOpen] = useState(false);
  const [remark, setRemark] = useState("");
  const [feedback, setFeedback] = useState("");

  const { _id, pdfUrl, note, title, imgUrl, mark, examineeName } =
    assignment || {};

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    const checkedAssignment = { remark, feedback, status: "Completed" };
    axios
      .put(
        `https://group-study-server.vercel.app/api/v1/user/submitted_assignments/${_id}`,
        checkedAssignment
      )
      .then((res) => {
        const data = res.data;
        if (data.modifiedCount > 0) {
          handleClose();
          refetch();
        }
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="card card-side bg-base-100 shadow-xl"
    >
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
            <Box className="rounded-lg p-5 max-w-[400px] md:max-w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl">
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
                    onBlur={(e) => setRemark(e.target.value)}
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
                    onBlur={(e) => setFeedback(e.target.value)}
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
    </motion.div>
  );
};

SubmittedCard.propTypes = {
  assignment: PropTypes.object,
  refetch: PropTypes.func,
};

export default SubmittedCard;
