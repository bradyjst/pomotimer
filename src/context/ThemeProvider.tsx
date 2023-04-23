import React, { useState } from "react";

type Theme = "light" | "dark";
type ThemeContext = {
	theme: Theme;
	toggleTheme: () => void;
	children: React.ReactElement;
};

export const MyThemeContext = React.createContext<ThemeContext>(
	{} as ThemeContext
);

export const ThemeProvider: React.FC<ThemeContext> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("dark");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const color = theme === "light" ? "#222" : "#FFF";
	const backgroundColor = theme === "light" ? "#FFF" : "#222";

	document.body.style.color = color;
	document.body.style.backgroundColor = backgroundColor;

	return (
		<MyThemeContext.Provider value={{ theme, toggleTheme, children }}>
			{children}
		</MyThemeContext.Provider>
	);
};
