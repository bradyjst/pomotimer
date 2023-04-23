import React from "react";
import "./Timer.css";
import { Countdown } from "../../components/countdown/Countdown";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Footer } from "../../components/footer/Footer";

interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
	return (
		<>
			<Sidebar />
			<div className="timer-container">
				{/* <div className="timer-subcontainer1">
					<button className="login">Sign in</button>
				</div> */}

				<div className="timer-subcontainer2">
					<button className="label-button">Add Label</button>
					<div className="countdown">
						<Countdown />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};
