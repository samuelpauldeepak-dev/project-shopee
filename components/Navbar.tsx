import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "../lib/session";
import { ProfileMenu } from ".";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <nav className="flexBetween navbar sticky top-0 bg-white">
      <div className="flex-1 flexStart gap-10 -ml-6 md:ml-0">
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
              className="hover:text-secondary"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter  relative">
        {session ? (
          <>
            <Link
              href={"/create-project"}
              className=" text-blue-700  font-medium   mr-4"
            >
              Share Work
            </Link>

            <ProfileMenu user={session?.user} />
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
