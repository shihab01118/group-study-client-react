import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
// import useGetAssignments from "../hooks/useGetAssignments";

const Assignments = () => {
  const [difficultyLevel, setDifficultyLevel] = useState("All");
  console.log(difficultyLevel);

  const {
    data: assignments,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["assignments"] ,
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/api/v1/user/assignments?difficulty=${difficultyLevel}`
      );
      return await data.json();
    },
  });

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto mt-10 mb-16 md:mb-20 lg:mb-24">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1A064E]">
          Assignmmets
        </h2>
        <select
          value={difficultyLevel}
          onChange={(e) => setDifficultyLevel(e.target.value)}
          className="select rounded-lg shadow-lg w-full max-w-[180px] bg-base-100 focus:outline-none text-gray-700 font-medium"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments?.map((assignment) => (
          <AssignmentCard key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
