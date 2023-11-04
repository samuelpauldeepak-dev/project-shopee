"use client";

import { useSession } from "next-auth/react";
import Logout from "./Logout";
import Image from "next/image";

const ProfileMenu = ({ user }: any) => {
  const { data } = useSession();
  console.log(data, "data");
  let name: any = user?.name!;
  name = name?.length > 10 ? name?.split(" ") : name?.split("@#$%^");
  return (
    <div className="relative">
      <div
        className="bg-white border rounded-lg w-48 h-fit gap-3 border-accent shadow-lg absolute 
            right-0 top-[3rem] flex flex-col justify-between"
      >
        <div className="w-full flex justify-start pt-4 pl-2 items-center">
          <div className="avatar online w-[71px] h-[71px]">
            <Image
              src={user?.image}
              height={70}
              width={70}
              alt="User Image"
              className="rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-[-0.5px]"
            />
          </div>
          <p className="ml-5 font-medium text-sm">
            {`${
              (name?.[0].length > 10
                ? `${name?.[0].slice(0, 10)}...`
                : name?.[0]) || "No Name"
            }  `}
          </p>
        </div>
        <button className="btn btn-sm rounded-none btn-error">Profile</button>
        <Logout />
      </div>
    </div>
  );
};

export default ProfileMenu;
