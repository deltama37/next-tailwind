import { useState, useEffect, createContext, useContext } from "react";
import firebase from "@/firebasae";
import type { User } from "@/types";

export type UserState = {
  user: User;
  loadingUser: boolean;
};

export const UserContext = createContext({
  user: null,
  loadingUser: true,
} as UserState);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    console.log(loadingUser);
    const unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      try {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoadingUser(false);
      }
    });
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserState => useContext(UserContext);
