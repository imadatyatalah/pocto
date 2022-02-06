// @TODO: Delete this file when Admin app is ready

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useGetUsers } from "@/api/admin";
import UserCard from "@/components/admin/UserCard";

import type { PoctoPage, TCurrentUser } from "@/types/index";

interface Props {
  currentUser: TCurrentUser;
}

const Users: PoctoPage<Props> = ({ currentUser }) => {
  const { replace } = useRouter();

  useEffect(() => {
    currentUser?.role !== "ADMIN" && replace("/");
  }, [currentUser, replace]);

  const { data: users } = useGetUsers();

  return (
    <>
      <section>
        {users?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </section>
    </>
  );
};

Users.authenticate = true;

export default Users;
