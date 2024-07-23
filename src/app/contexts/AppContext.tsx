import { useContext, createContext, useState, ReactNode } from "react";

type AppContextType = {
  links: Link[];
  user: User;
  updateLinks: (newLinks: Link[]) => void;
  updateUser: (newUser: User) => void;
};

type User = {
  name: string; // Additional properties can be added as needed
};

type Link = {
  name: string;
  icon: ReactNode;
  url: string;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: ReactNode }) {
  const [links, setLinks] = useState<Link[]>([]);
  const [user, setUser] = useState<User>({
    name: "",
  });

  const updateLinks = (newLinks: Link[]) => {
    setLinks(newLinks);
  };

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  return (
    <AppContext.Provider value={{ links, user, updateLinks, updateUser }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
