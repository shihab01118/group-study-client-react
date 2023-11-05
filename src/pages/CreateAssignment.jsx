import DatePicker from "react-datepicker";
import assignment_cover from "../assets/images/add_assignment.jpg";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";

const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState();
  const [mark, setMark] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [level, setLevel] = useState("Easy");
  const [dueDate, setDueDate] = useState(new Date());

  const {user} = useAuth();
  const email = user.email;

  const handleCreateAssignment = (e) => {
    e.preventDefault();

    const assignment = {title, description, mark, imgUrl, level, dueDate, email }
    console.log(assignment);
  }

  return (
    <div className="max-w-4xl mx-8 md:mx-16 lg:mx-auto bg-base-100 rounded-xl shadow-xl my-16 md:my-20 lg:my-24 p-10 md:p-16 flex items-center flex-col-reverse md:flex-row md:gap-8 lg:gap-20">
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1A064E]">
          Create Assignment
        </h2>
        <form onSubmit={handleCreateAssignment}>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Title"
              className="outline-none text-sm md:text-base w-full"
              onBlur={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Description"
              className="outline-none text-sm md:text-base w-full"
              onBlur={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="text"
              placeholder="Total Mark"
              className="outline-none text-sm md:text-base w-full"
              onBlur={e => setMark(e.target.value)}
              required
            />
          </div>
          <div className="border-gray-400 border-b py-2 mb-5">
            <input
              type="url"
              placeholder="Thumbnail URL"
              className="outline-none text-sm md:text-base w-full"
              onBlur={e => setImgUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2">
            <p className="font-medium pt-3">Difficulty Level:</p>
          <select value={level} onChange={e => setLevel(e.target.value)} className="select w-full select-bordered mb-5 border-gray-400 focus:outline-none flex-1">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          </div>
          <div className="mb-5">
            <span className="font-medium">Due Date: </span>
            <DatePicker
              className="focus:outline-none"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white hover:text-black hover:bg-secondary"
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={assignment_cover} alt="sign up" />
      </div>
    </div>
  );
};

export default CreateAssignment;
