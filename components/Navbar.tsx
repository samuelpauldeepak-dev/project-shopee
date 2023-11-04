import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import AuthProvider from "./AuthProvider";
import { getCurrentUser } from "../lib/session";
import Logout from "./Logout";
import { ProfileMenu } from ".";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar sticky top-0 bg-white">
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
      <div className="flexCenter gap-4 relative">
        {session ? (
          <>
            <Link href={"/"} className="btn btn-sm btn-primary">
              Share Work
            </Link>
            {session?.user?.image && (
              <Link href={`/profile/${session?.user?.id}`}>
                <Image
                  src={session.user.image}
                  height={40}
                  width={40}
                  alt="User Image"
                  className="rounded-full"
                />
              </Link>
            )}

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
