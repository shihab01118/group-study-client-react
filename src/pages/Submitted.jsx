import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import SubmittedCard from "../components/SubmittedCard";
import useAuth from "../hooks/useAuth";

const Submitted = () => {
  const {user} = useAuth();
  const status = "Pending";
  const {
    data: submittedAssignmnets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["submittedAssignmnets"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/api/v1/user/submitted_assignments?status=${status}&email=${user?.email}`, { credentials: "include"}
      );
      return await data.json();
    },
  });

  if (isLoading === true) {
    return <Loading />;
  }

  if (submittedAssignmnets.length < 1) {
    return (
      <div className="h-[calc(100vh-88px)] flex justify-center items-center">
        <p className="text-[#6440FA] text-lg font-medium">No Submission Yet</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto mt-10 mb-16 md:mb-20 lg:mb-24 min-h-[calc(100vh-88px)]">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-[#1A064E]">
        Submitted Assignmmets
      </h2>
      <div className="grid gap-6 lg:grid-cols-2 mt-10">
        {submittedAssignmnets?.map((assignment) => (
          <SubmittedCard
            key={assignment?._id}
            assignment={assignment}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default Submitted;
