import React from "react";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable />
    </>
  );
};

export default UsersPage;
