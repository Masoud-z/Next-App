import React from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <UsersTable sortOrder={searchParams.sortOrder} />
    </>
  );
};

export default UsersPage;
