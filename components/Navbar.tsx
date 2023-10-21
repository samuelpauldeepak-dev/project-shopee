"use client";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import { useSession } from "next-auth/react";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = null;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            className=""
            src={"/images/logo-black.png"}
            height={100}
            width={140}
            alt="project shopee logo"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="hover:text-[#8f5df5]"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            <Link href={"/"}>Share Work</Link>
            <span>User Name</span>
            <span>User Photo</span>
            <span>LogOut</span>
          </>
        ) : (
          <>
            <AuthProvider />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;