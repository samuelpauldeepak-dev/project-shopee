"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="btn  rounded-none bg-white rounded-b-md hover:text-secondary hover:bg-white-smoke"
    >
      Logout
    </button>
  );
};

export default Logout;
