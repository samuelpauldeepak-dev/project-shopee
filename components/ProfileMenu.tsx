"use client";
import { useSession } from "next-auth/react";
import Logout from "./Logout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


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
        setProfileMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
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
          className="rounded-lg cursor-pointer"
          onClick={() => setProfileMenuVisible((prev) => !prev)}
        />
      )}
      {profileMenuVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 10, y: 25 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          className="relative"
        >
          <div
            className="bg-white border rounded-lg w-60 h-fit  border-accent shadow-lg absolute 
            right-0  "
          >
            <div className="w-full flex justify-start pt-4 pl-4  items-center pb-4 bg-[#D4E4FF]">
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
            <div className="flex flex-col ">
              <Link href={`/profile/${user?.id}`} className="w-full">
                <button
                  className="min-h-[40px] flex items-center pl-3 font-medium text-sm cursor-pointer
                 hover:text-secondary hover:bg-white-smoke w-full"
                >
                  Profile
                </button>
              </Link>

              <Logout />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileMenu;
