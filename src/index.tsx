import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeProvider";
import { MyValueProvider, valueProps } from "./context/ValueProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<MyValueProvider {...valueProps}>
				<ThemeProvider theme="light" toggleTheme={() => {}}>
					<App />
				</ThemeProvider>
			</MyValueProvider>
		</BrowserRouter>
	</React.StrictMode>
);
