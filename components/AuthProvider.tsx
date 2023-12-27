"use client";
import { getProviders, signIn, getSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { GithubIcon, GoogleIcon, LinkedInIcon } from "../resources";
import { RedirectableProviderType } from "next-auth/providers/index";
import { motion } from "framer-motion";
import { toast } from "sonner";
type TProvider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};
type TProviders = Record<string, TProvider>;
const AuthProvider = () => {
  const [providers, setProviders] = useState<TProviders | null>(null);
  const [activeProvider, setActiveProvider] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const fetchProvider = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProvider();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modelRef.current &&
        !modelRef.current.contains(event.target as Node)
      ) {
        // Click occurred outside the model
        setIsLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleProviderClick = (provider: TProvider) => {
    toast.info(`Logging in with ${provider?.id}`);
    setIsLoading(true);
    signIn<RedirectableProviderType | undefined>(provider?.id);
    setActiveProvider(provider?.id);
  };

  if (providers) {
    return (
      <div className="w-full relative" ref={modelRef}>
        <button
          className="btn btn-sm bg-blue-500 text-white rounded-md w-[6rem] h-[2.2rem] hover:bg-blue-500 hover:opacity-90"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          Login
        </button>
        {isLogin && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 10, y: 20 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="bg-white border rounded-lg w-60 h-fit border-accent shadow-lg absolute 
            right-0 top-[3rem] flex flex-col justify-between"
          >
            {Object.values(providers).map((provider: TProvider, i) => {
              return (
                <>
                  <span
                    key={`${i} ${provider.id}`}
                    onClick={() => {
                      handleProviderClick(provider);
                    }}
                    className={` min-h-12 flex items-center pl-4 font-medium text-md cursor-pointer
                 hover:text-secondary hover:bg-white-smoke  `}
                  >
                    {provider?.id === "google" ? (
                      <GoogleIcon className="w-[20px] h-[20px] mr-2" />
                    ) : provider.id === "github" ? (
                      <GithubIcon className="w-[23px] h-[23px] mr-2" />
                    ) : provider.id === "linkedin" ? (
                      <LinkedInIcon className="w-[20px] h-[20px] mr-2" />
                    ) : (
                      ""
                    )}
                    <span
                      className={`ml-2 select-none ${
                        activeProvider === provider.id && isLoading
                          ? `loading loading-spinner  text-blue-500 `
                          : ""
                      }`}
                    >
                      {provider?.name}
                    </span>
                  </span>
                  {/* <div className="h-[1px] w-full bg-accent " /> */}
                </>
              );
            })}

            <span
              className=" border-accent min-h-12 flex items-center pl-4 text-md font-medium 
            cursor-pointer hover:text-secondary hover:bg-white rounded-b-lg select-none"
            >
              Login with Email
            </span>
          </motion.div>
        )}
      </div>
    );
  }
};

export default AuthProvider;
