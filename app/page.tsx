"use client";
import { useSession } from "next-auth/react";
import { Dashboard } from "../screens";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { toast } from "sonner";
import { USER_ID } from "../lib";
export default function Home() {
  const { data: sessionData } = useSession() as any;
  useEffect(() => {
    if (sessionData?.user?.id) {
      if (!Cookies.get(USER_ID)) {
        toast.success("Logged in successfully");
      }
      Cookies.set(USER_ID, sessionData?.user?.id);
    }
  });

  return <Dashboard />;
}
