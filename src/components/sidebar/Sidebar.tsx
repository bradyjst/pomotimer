import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyThemeContext } from "../../context/ThemeProvider";
import "./Sidebar.css";

interface SidebarProps {
	passData?: Function;
}

export const Sidebar: React.FC<SidebarProps> = () => {
	const { theme, toggleTheme } = useContext(MyThemeContext);

	return (
		<>
			<div className="sidebar-container">
				<p className="logo"> - Pomo -</p>
				<Link to="/">
					<p className="timer"> Timer </p>
				</Link>
				<Link to="/Stats">
					<p className="stats"> Stats </p>
				</Link>
				<Link to="/Settings">
					<p className="settings"> Settings </p>
				</Link>
				<div className="theme">
					<button
						onClick={() => {
							toggleTheme();
						}}
						className="theme-button"
					>
						<p>{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
					</button>
				</div>
			</div>
		</>
	);
};
