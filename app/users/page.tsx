import React from "react";
import { Suspense } from "react";
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
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={searchParams.sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
