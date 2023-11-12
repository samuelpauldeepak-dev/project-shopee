"use client";

import { useSession } from "next-auth/react";
import Logout from "./Logout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProfileMenu = ({ user }: any) => {
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  let splitName = (name: any) => {
    return name?.length > 10 ? name?.split(" ") : name?.split("@#$%^");
  };
  let name = splitName(user?.name);

  const modelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modelRef.current &&
        !modelRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside the model
        setProfileMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={modelRef}>
      {user?.image && (
        <Image
          src={user.image}
          height={40}
          width={40}
          alt="User Image"
          className="rounded-full cursor-pointer"
          onClick={() => setProfileMenuVisible((prev) => !prev)}
        />
      )}
      {profileMenuVisible && (
        <div className="relative">
          <div
            className="bg-white border rounded-lg w-60 h-fit  border-accent shadow-lg absolute 
            right-0 top-[1rem] "
          >
            <div className="w-full flex justify-start pt-4 pl-4  items-center">
              <div className="avatar online w-[71px] h-[71px] ml-1">
                <Image
                  src={user?.image}
                  height={60}
                  width={60}
                  alt="User Image"
                  className="rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-[-0.5px]"
                />
              </div>
              <p className="ml-5 font-medium text-md">
                {`${
                  (name?.[0].length > 10
                    ? `${name?.[0].slice(0, 10)}...`
                    : name?.[0]) || "No Name"
                }  `}
              </p>
            </div>
            <div className="mt-4 flex flex-col ">
              <Link href={`/profile/${user?.id}`} className="w-full">
                <button className="btn rounded-none bg-white hover:bg-white-smoke hover:text-secondary w-full">
                  Profile
                </button>
              </Link>

              <Logout />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
