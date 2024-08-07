import React, { createContext, useState } from 'react';

import { ChildrenProp } from '../@types/children';

import { formSignIn } from '../dto/formSignInDTO';

type AuthContextData = {
  user: formSignIn;
  signIn: (user: string, password: string) => formSignIn;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthContextProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState({} as formSignIn);

  function signIn(users: string, password: string) {
    if (users === 'a' && password === 'a') {
      setUser({ user: users, password });

      return user;
    } else {
      return user;
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
