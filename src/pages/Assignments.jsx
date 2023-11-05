import AssignmentCard from "../components/AssignmentCard";
import Loading from "../components/Loading";
import useGetAssignments from "../hooks/useGetAssignments";

const Assignments = () => {
  const { assignments, isLoading } = useGetAssignments();

  if (isLoading === true) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto my-16 md:my-20 lg:my-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments?.map((assignment) => (
          <AssignmentCard key={assignment._id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default Assignments;
