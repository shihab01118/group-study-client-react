import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import SubmittedCard from "../components/SubmittedCard";

const Submitted = () => {
  const status = "Pending";
  const {
    data: submittedAssignmnets,
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["submittedAssignmnets"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/api/v1/user/submitted_assignments?status=${status}`
      );
      return await data.json();
    },
  });


  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto mt-10 mb-16 md:mb-20 lg:mb-24">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-[#1A064E]">
        Submitted Assignmmets
      </h2>
      <div className="grid gap-6 lg:grid-cols-2 mt-10">
        {
            submittedAssignmnets?.map(assignment => <SubmittedCard key={assignment?._id} assignment={assignment} />)
        }
      </div>
    </div>
  );
};

export default Submitted;
