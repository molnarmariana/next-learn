"use client";
import { createUser } from "@/server/users";
import { getUsers } from "@/client/users";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
}

export default function Page() {
      const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ["todos"], queryFn: getUsers });

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tanstack Page</h1>
      <Button onClick={() => mutation.mutate({ id: 1, name: "New User" })}>
        Create User
      </Button>
      {query.data?.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
