"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="btn btn-sm rounded-none btn-error"
    >
      Logout
    </button>
  );
};

export default Logout;
