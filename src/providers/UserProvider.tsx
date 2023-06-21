'use client';

import { ReactNode } from 'react';

import { MyUserContextProvider } from 'hooks/useUser';

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
