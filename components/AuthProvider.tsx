"use client";
import { getProviders, signIn } from "next-auth/react";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    const fetchProvider = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProvider();
  }, []);

  const [providers, setProviders] = useState<TProviders | null>(null);
  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: TProvider, i) => {
          return (
            <button key={i} onClick={() => signIn(provider?.id)}>
              {provider.id}
            </button>
          );
        })}
      </div>
    );
  }
};

export default AuthProvider;
