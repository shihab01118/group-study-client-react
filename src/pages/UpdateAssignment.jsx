import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import update_assignmet from "../assets/images/update_assignment.jpg";
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const { title, description, mark, imgUrl, level, dueDate } =
    assignment || {};

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newMark, setNewMark] = useState("");
  const [newImgUrl, setNewImgUrl] = useState("");
  const [newLevel, setNewLevel] = useState(level);
  const [newDueDate, setNewDueDate] = useState(new Date(dueDate));

  const handleUpdateAssignment = e => {
    e.preventDefault();

    const updatedAssignment = {newTitle, newDescription, newMark, newImgUrl, newLevel, newDueDate};
    console.log(updatedAssignment);
  }

  return (
    <div className="max-w-4xl mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl my-16 md:my-20 lg:my-24 p-10 md:p-16 flex items-center flex-col-reverse md:flex-row md:gap-8 lg:gap-20">
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A064E]">
          Update Assignment
        </h2>
        <form onSubmit={handleUpdateAssignment}>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Title"
              defaultValue={title}
              className="outline-none text-sm md:text-base w-full"
              onBlur={(e) => setNewTitle(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Description"
              defaultValue={description}
              className="outline-none text-sm md:text-base w-full"
              onBlur={(e) => setNewDescription(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Total Mark"
              defaultValue={mark}
              className="outline-none text-sm md:text-base w-full"
              onBlur={(e) => setNewMark(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="url"
              placeholder="Thumbnail URL"
              defaultValue={imgUrl}
              className="outline-none text-sm md:text-base w-full"
              onBlur={(e) => setNewImgUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <p className="font-medium pt-3">Difficulty Level:</p>
            <select
              value={newLevel}
              onChange={(e) => setNewLevel(e.target.value)}
              className="select w-full select-bordered mb-5 border-gray-400 focus:outline-none flex-1"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="mb-5">
            <span className="font-medium">Due Date: </span>
            <ReactDatePicker
              className="focus:outline-none"
              selected={newDueDate}
              onChange={(date) => setNewDueDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white hover:text-black hover:bg-secondary"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <img src={update_assignmet} alt="sign up" />
      </div>
    </div>
  );
};

export default UpdateAssignment;
