"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type AppContextType = {
  links: Link[];
  user: User;
  updateLinks: (newLinks: Link[]) => void;
  updateUser: (newUser: User) => void;
};

type User = {
  name: string;
};

type Link = {
  name: string;
  icon: ReactNode;
  url: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [links, setLinks] = useState<Link[]>(() => {
    const savedLinks = localStorage.getItem("Links");

    return savedLinks ? JSON.parse(savedLinks) : [];
  });
  const [user, setUser] = useState<User>({
    name: "",
  });

  const updateLinks = (newLinks: Link[]) => {
    setLinks(newLinks);
  };

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  useEffect(() => {
    localStorage.setItem("Links", JSON.stringify(links));
  }, [links]);

  return (
    <AppContext.Provider value={{ links, user, updateLinks, updateUser }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
