"use client";
import {
	useContext,
	createContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { Link, User, AppContextType } from "../../types";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({ children }: { children: ReactNode }) {
	const [links, setLinks] = useState<Link[]>(() => {
		if (typeof window !== "undefined") {
			const savedLinks = localStorage.getItem("Links");
			return savedLinks ? JSON.parse(savedLinks) : [];
		}
		return [];
	});

	const [user, setUser] = useState<User>({
		first_name: "",
		last_name: "",
		email: "",
		id: "",
		img: "",
		imgFile: null,
	});

	const updateLinks = (newLinks: Link[]) => {
		setLinks(newLinks);
	};

	const updateUser = (newUser: User) => {
		setUser(newUser);
	};

	console.log(user)

	useEffect(() => {
		if (document && links) {
			localStorage.setItem("Links", JSON.stringify(links));
		}
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
