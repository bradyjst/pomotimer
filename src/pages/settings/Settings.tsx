import React, { useContext } from "react";
import { Footer } from "../../components/footer/Footer";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { MyThemeContext } from "../../context/ThemeProvider";
import { MyValueContext } from "../../context/ValueProvider";
import "./Settings.css";

export const Settings: React.FC = () => {
	const { theme, toggleTheme } = useContext(MyThemeContext);
	const {
		workSlider,
		setWorkSlider,
		breakSlider,
		setBreakSlider,
		rounds,
		setRounds,
		autoStart,
		setAutoStart,
	} = useContext(MyValueContext);

	const handleWorkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWorkSlider(Number(e.target.value));
	};

	const handleBreakChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBreakSlider(Number(e.target.value));
	};

	const handleRoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRounds(Number(e.target.value));
	};

	return (
		<>
			<Sidebar />
			<div className="settings-container">
				<div className="content-container">
					<div className="work-duration">
						<h5>Work Duration</h5>
						<p>{workSlider}</p>
						<input
							type="range"
							min={1}
							max={60}
							step={1}
							value={workSlider}
							onChange={handleWorkChange}
							className="work-slider"
						/>
					</div>
					<div className="break-duration">
						<h5>Break Duration</h5>
						<p>{breakSlider}</p>
						<input
							type="range"
							min={1}
							max={20}
							step={1}
							value={breakSlider}
							className="break-slider"
							onChange={handleBreakChange}
						/>
					</div>

					<div className="rounds">
						<h5>Rounds</h5>
						<p>{rounds}</p>
						<input
							type="range"
							min={1}
							max={10}
							value={rounds}
							className="rounds-slider"
							onChange={handleRoundsChange}
						/>
					</div>
					<div className="buttons">
						<p>
							{" "}
							Autostart{" "}
							<input
								type="checkbox"
								checked={autoStart}
								onChange={() => {
									setAutoStart(!autoStart);
								}}
							/>
						</p>{" "}
						<p>
							Dark Mode{" "}
							<input
								type="checkbox"
								checked={theme === "dark"}
								onChange={toggleTheme}
							/>
						</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};
