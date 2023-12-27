"use client";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import Cookies from "js-cookie";
import { USER_ID } from "../lib";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const promise = new Promise((resolve) =>
        setTimeout(resolve, 2000)
      ) as any;

      toast.promise(promise, {
        loading: "Logging out...",
        success: () => {
          setTimeout(() => {
            signOut();
            Cookies.remove(USER_ID);
          }, 500);
          return "Logged out successfully";
        },
      });
    } catch (err) {
      toast.error("Error logging out");
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="min-h-[40px] flex items-center pl-3 font-medium text-sm cursor-pointer
                 hover:text-secondary hover:bg-white-smoke w-full"
    >
      Logout
    </button>
  );
};

export default Logout;
