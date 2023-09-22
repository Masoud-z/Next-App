import React from "react";
import UsersTable from "./UsersTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable sortOrder={searchParams.sortOrder} />
    </>
  );
};

export default UsersPage;
