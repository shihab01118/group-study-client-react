import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { title, description, mark, imgUrl, level, dueDate } =
    assignment || {};
  return (
    <div className="card max-w-md mx-8 md:mx-16 lg:mx-auto my-10 md:my-16 lg:my-20 bg-base-100 shadow-xl rounded-lg">
      <figure>
        <img
          src={imgUrl}
          alt={title}
          className="h-[220px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#1A064E]">{title}</h2>
        <div className="space-y-2 text-gray-600 font-medium">
        <p className="font-normal">{description}</p>
        <p>Total Marks: <span className="font-normal">{mark}</span></p>
        <p>Difficulty: <span className="font-normal">{level}</span></p>
        <p>Due Date: <span className="font-normal">{dueDate.slice(0, 10)}</span></p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-[#6440FA] rounded-lg capitalize md:text-lg font-semibold text-white border-none hover:text-black hover:bg-secondary">Take Assignment</button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
