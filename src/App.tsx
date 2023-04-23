import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Timer } from "./pages/timer/Timer";
import { Stats } from "./pages/stats/Stats";
import { Settings } from "./pages/settings/Settings";

function App() {
	return (
		<>
			<div className="app-container">
				<Routes>
					<Route path="/" element={<Timer />} />
					<Route path="Stats" element={<Stats />} />
					<Route path="Settings" element={<Settings />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
