import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
import UserAssignment from "../components/UserAssignment";

const MyAssignments = () => {
  const { user } = useAuth();

  const { data: userAssignmnets, isLoading } = useQuery({
    queryKey: ["submittedAssignmnets"],
    queryFn: async () => {
      const data = await fetch(
        `http://localhost:5000/api/v1/user/user_submitted_assignments/${user?.email}`,
        { credentials: "include" }
      );
      return await data.json();
    },
  });

  if (isLoading === true) {
    return <Loading />;
  }

  if (userAssignmnets.length < 1) {
    return (
      <div className="h-[calc(100vh-88px)] flex justify-center items-center">
        <p className="text-[#6440FA] text-lg font-medium">
          No Assignment Found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto mt-10 mb-16 md:mb-20 lg:mb-24 min-h-[calc(100vh-88px)]">
      <h2 className="text-2xl md:text-4xl text-center font-bold text-[#1A064E]">
        My Submission
      </h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {userAssignmnets?.map((assignment) => (
          <UserAssignment key={assignment?._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default MyAssignments;
