import React, { createContext, useState, useEffect } from 'react';

import { ChildrenProp } from '../@types/children';
import { formSignIn } from '../dto/formSignInDTO';

type AuthContextData = {
  user: formSignIn;
  isLoading: boolean;
  signIn: (user: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthContextProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<formSignIn>({} as formSignIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function signIn(users: string, password: string) {
    setIsLoading(true);

    setTimeout(() => {
      if (users === 'a' && password === 'a') {
        setUser({ user: users, password });
      } else {
        setUser({} as formSignIn);
      }
      setIsLoading(false);
    }, 1000);
  }

  function signOut() {
    setUser({} as formSignIn);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
