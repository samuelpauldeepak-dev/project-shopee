import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";

type TFooterColumn = {
  title: string;
  link: Array<string>;
};
const FooterColumn = ({ title, link }: TFooterColumn) => (
  <div className="footer_column overflow-x-hidden">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal ">
      {link.map((item) => (
        <Link href={"/"} className="hover:text-[#8f5df5] max-w-max">
          {item}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex sm:flex-row xs:flex-col flex-wrap items-start justify-between  w-full">
          <div className="flex flex-col items-start ">
            <Image
              className="-ml-1"
              src={"/images/logo-purple.png"}
              width={140}
              height={100}
              alt="purple logo"
            />
            <p className="text-start text-sm font-normal mt-2 max-w-xs text-[#4D4C7D]">
              Project Shopee is the world's leading community for creatives to
              share, grow, and get skills.
            </p>
          </div>
          {/* <p className="text-gray mt-6 sm:mt-0 -mb-3 sm:mb-0">
            {" "}
            <span className="text-black font-semibold mr-1">10,214</span>
            Project Submitted
          </p> */}
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((footerLink, index) => (
            <FooterColumn
              key={`${footerLink} ${index}`}
              title={footerLink.title}
              link={footerLink.links}
            />
          ))}
        </div>
        <div className="flexBetween footer_copyright ">
          <p className="flex flex-wrap">
            <span>SPD Tech Product</span>
            <small className="sm:ml-2">
              @2023 Project Shopee All Rights Reserved to SPDIC
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
