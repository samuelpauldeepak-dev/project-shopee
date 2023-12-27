"use client";
import Link from "next/link";
import { CancelIcon } from "../resources";
import { ReactNode, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

const Model = ({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) => {
  const router = useRouter();
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const handleClose = useCallback(() => {
    router.push("/");
  }, [router]);
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current) {
        handleClose();
      }
    },
    [overlay, handleClose]
  );
  return (
    <div
      className="custom-modal md:p-6 lg:p-10  "
      ref={overlay}
      onClick={handleClick}
    >
      <div
        className="bg-white w-full h-full overflow-hidden md:rounded-lg p-1 sm:p-2 "
        ref={wrapper}
      >
        <div className=" flex justify-between p-2 lg:p-4">
          <h1 className="modal-head-text">{heading}</h1>

          <button
            type="button"
            onClick={handleClose}
            className="w-[82.5px] h-[34px]  flex justify-center items-center
             px-3 py-2 text-sm font-semibold text-gray-900  hover:text-gray/80 -mt-1 lg:-mt-2 sm:mt-0 -mr-5 sm:mr-0"
          >
            <CancelIcon width={25} height={25} />
          </button>
        </div>
        <div className="w-full h-full overflow-auto pb-16">{children}</div>
      </div>
    </div>
  );
};

export default Model;
