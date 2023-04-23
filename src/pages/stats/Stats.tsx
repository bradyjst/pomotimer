import React, { useContext } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { MyValueContext } from "../../context/ValueProvider";
import "./Stats.css";

interface StatsProps {}

export const Stats: React.FC<StatsProps> = () => {
	const { sessions } = useContext(MyValueContext);
	return (
		<>
			<Sidebar />
			<div className="stats-container">
				{sessions > 1 ? (
					<h3>You've completed {sessions} sessions! Good job!</h3>
				) : (
					<h3>You've completed {sessions} session! Good job!</h3>
				)}
			</div>
		</>
	);
};
