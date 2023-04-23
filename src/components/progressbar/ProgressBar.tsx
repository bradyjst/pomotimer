import React, { useEffect } from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
	formatTime: number;
	timeType: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ formatTime }) => {
	useEffect(() => {
		const updateProgressBar = (progress: number) => {
			const progressBarFill = document.getElementById("progress-bar-fill");
			progressBarFill!.style.width = `${progress}%`;
		};
		updateProgressBar(formatTime);
	}, [formatTime]);

	// console.log(formatTime);

	return (
		<>
			<div className="progress-bar">
				<div className="progress-bar-fill" id="progress-bar-fill"></div>
			</div>
		</>
	);
};
