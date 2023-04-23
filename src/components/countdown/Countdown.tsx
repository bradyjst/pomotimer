import React, { useContext, useEffect, useReducer, useState } from "react";
import { MyValueContext } from "../../context/ValueProvider";
import { ProgressBar } from "../progressbar/ProgressBar";
import "./Countdown.css";

type State = {
	isActive: boolean;
	restActive: boolean;
	timeType: boolean;
};

type Action =
	| { type: "Set_Is_Active"; Payload: boolean }
	| { type: "Set_Rest_Active"; Payload: boolean }
	| { type: "Set_Time_Type"; Payload: boolean }
	| { type: "Reset" };

const initialState: State = {
	isActive: false,
	restActive: false,
	timeType: true,
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "Set_Is_Active":
			return { ...state, isActive: action.Payload };

		case "Set_Rest_Active":
			return { ...state, restActive: action.Payload };

		case "Set_Time_Type":
			return { ...state, timeType: action.Payload };

		case "Reset":
			return initialState;
		default:
			return state;
	}
};
export const Countdown: React.FC = () => {
	const {
		rounds,
		workSlider,
		breakSlider,
		setBreakSlider,
		setWorkSlider,
		sessions,
		setSessions,
		count,
		setCount,
	} = useContext(MyValueContext);
	const [state, dispatch] = useReducer(reducer, initialState);
	const [timeRemaining, setTimeRemaining] = useState(workSlider * 1000 * 60);
	const [restTime, setRestTime] = useState(breakSlider * 1000 * 60);

	const { isActive, restActive, timeType } = state;

	//Logic for controlling which timer is active
	useEffect(() => {
		if (isActive) {
			const timerId = setInterval(() => {
				setTimeRemaining(timeRemaining - 1000);
			}, 1000);

			if (timeRemaining === 0) {
				dispatch({ type: "Set_Is_Active", Payload: false });
				dispatch({ type: "Set_Time_Type", Payload: false });
				dispatch({ type: "Set_Rest_Active", Payload: true });
			}

			return () => {
				clearInterval(timerId);
			};
		}
		if (restActive) {
			const timerId = setInterval(() => {
				setRestTime(restTime - 1000);
			}, 1000);

			if (restTime === 0) {
				dispatch({ type: "Set_Rest_Active", Payload: false });
				dispatch({ type: "Set_Time_Type", Payload: true });
				dispatch({ type: "Set_Is_Active", Payload: true });
			}

			return () => {
				clearInterval(timerId);
			};
		}
	}, [
		restTime,
		timeRemaining,
		isActive,
		restActive,
		setWorkSlider,
		breakSlider,
		rounds,
		workSlider,
		setBreakSlider,
	]);

	useEffect(() => {
		if (count === rounds) {
			setSessions(sessions + 1);
			setCount(0);
			dispatch({ type: "Reset" });
			setTimeRemaining(workSlider * 1000 * 60);
			setRestTime(breakSlider * 1000 * 60);
		}
	}, [count, setCount, breakSlider, workSlider, rounds, sessions, setSessions]);

	const increment = () => {
		setCount(count + 0.5);
	};

	const reset = () => {
		dispatch({ type: "Reset" });
		setTimeRemaining(workSlider * 1000 * 60);
		setRestTime(breakSlider * 1000 * 60);
	};

	//Switches visible timer and sets all states properly so other timers stop, and timer wont start automatically
	const switchTimers = () => {
		dispatch({ type: "Set_Time_Type", Payload: !timeType });
		dispatch({ type: "Set_Rest_Active", Payload: false });
		dispatch({ type: "Set_Is_Active", Payload: false });
	};

	const formatTime = (time: number) => {
		const seconds = Math.floor(time / 1000) % 60;
		const minutes = Math.floor(time / 1000 / 60) % 60;

		return (
			<h1 className="center-timer">
				{minutes.toString().padStart(2, "0")} :{" "}
				{seconds.toString().padStart(2, "0")}
			</h1>
		);
	};

	const bigPercentage = timeRemaining / workSlider / 60 / 10;
	const restPercentage = restTime / breakSlider / 60 / 10;

	console.log(count);
	console.log(sessions);
	console.log(`time remaining = ${timeRemaining}`);
	console.log(`Rest time = ${restTime}`);
	console.log(`Work slider = ${workSlider}`);
	console.log(`Break slider = ${breakSlider}`);
	console.log(`big percentage = ${bigPercentage}`);
	console.log(`rest percentage = ${restPercentage}`);

	return (
		<>
			{state.timeType ? formatTime(timeRemaining) : formatTime(restTime)}
			{state.timeType ? (
				<ProgressBar formatTime={bigPercentage} timeType={state.timeType} />
			) : (
				<ProgressBar formatTime={restPercentage} timeType={state.timeType} />
			)}

			<div className="controls">
				<button
					className="button-control"
					onClick={() => {
						reset();
					}}
				>
					Restart
				</button>
				<button
					className="button-control"
					onClick={
						state.timeType
							? () => {
									dispatch({ type: "Set_Is_Active", Payload: !state.isActive });
							  }
							: () => {
									dispatch({
										type: "Set_Rest_Active",
										Payload: !state.restActive,
									});
							  }
					}
				>
					{timeType
						? isActive
							? "Pause"
							: "Play"
						: restActive
						? "Pause"
						: "Play"}
				</button>
				<button
					className="button-control"
					onClick={() => {
						switchTimers();
						increment();
					}}
				>
					Next
				</button>
			</div>
			<h3 className="center-timer">{state.timeType ? "Work!" : "Rest!"}</h3>
			<h4 className="center-timer">
				{count} of {rounds} sessions!
			</h4>
		</>
	);
};
