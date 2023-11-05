import { useQuery } from "@tanstack/react-query";

const useGetAssignments = () => {
  const {
    data: assignments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/api/v1/user/assignments");
      return await data.json();
    },
  });

  return { assignments, isLoading, refetch };
};

export default useGetAssignments;
