import { createContext, useContext } from 'react';

type UserType = {
  id: number;
  firstName?: string;
  lastName?: string;
  email?: string;
};

type UserContextType = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      'useUserContext must be used within a UserContext element',
    );
  }

  return context;
}