import { useState } from "react";
import AssignmentCard from "../components/AssignmentCard";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
  const [difficultyLevel, setDifficultyLevel] = useState("All");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const {
    data: assignments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [difficultyLevel, currentPage, itemsPerPage],
    queryFn: async () => {
      const data = await fetch(
        `https://group-study-server.vercel.app/api/v1/user/assignments?difficulty=${difficultyLevel}&page=${
          currentPage - 1
        }&size=${itemsPerPage}`,
        {
          credentials: "include",
        }
      );
      return await data.json();
    },
  });

  if (isLoading === true) {
    return <Loading />;
  }

  const handleChangeItemsNumber = (e) => {
    const number = parseInt(e.target.value);
    setItemsPerPage(number);
    setCurrentPage(1);
  };

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
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            refetch={refetch}
          />
        ))}
      </div>
      <div className="mt-10 w-fit mx-auto">
        {difficultyLevel === "All" && (
          <div>
            {pages.map((number) => (
              <button
                onClick={() => setCurrentPage(number)}
                className={
                  currentPage === number
                    ? "btn btn-sm btn-circle mr-2 bg-[#6440FA] text-white"
                    : "btn btn-sm btn-circle mr-2 text-[#6440FA]"
                }
                key={number}
              >
                {number}
              </button>
            ))}
            <select
              className="border border-[#6440FA] p-[2px] rounded focus:outline-none"
              value={itemsPerPage}
              onChange={handleChangeItemsNumber}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignments;
