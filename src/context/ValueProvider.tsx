import React, { createContext, useState } from "react";

type ValueProviderContext = {
	workSlider: number;
	breakSlider: number;
	rounds: number;
	sessions: number;
	count: number;
	autoStart: boolean;
	setAutoStart: React.Dispatch<React.SetStateAction<boolean>>;
	setWorkSlider: React.Dispatch<React.SetStateAction<number>>;
	setBreakSlider: React.Dispatch<React.SetStateAction<number>>;
	setRounds: React.Dispatch<React.SetStateAction<number>>;
	setSessions: React.Dispatch<React.SetStateAction<number>>;
	setCount: React.Dispatch<React.SetStateAction<number>>;
	children?: React.ReactElement;
};

export const MyValueContext = createContext<ValueProviderContext>({
	workSlider: 25,
	breakSlider: 5,
	rounds: 5,
	sessions: 0,
	count: 0,
	autoStart: false,
	setAutoStart: () => {},
	setCount: () => {},
	setWorkSlider: () => {},
	setBreakSlider: () => {},
	setRounds: () => {},
	setSessions: () => {},
} as ValueProviderContext);

export const valueProps = {
	workSlider: 25,
	breakSlider: 5,
	rounds: 5,
	sessions: 0,
	count: 0,
	autoStart: false,
	setAutoStart: () => {},
	setCount: () => {},
	setWorkSlider: () => {},
	setBreakSlider: () => {},
	setRounds: () => {},
	setSessions: () => {},
};

export const MyValueProvider: React.FC<ValueProviderContext> = ({
	children,
}) => {
	const [workSlider, setWorkSlider] = useState(25);
	const [breakSlider, setBreakSlider] = useState(5);
	const [rounds, setRounds] = useState(5);
	const [sessions, setSessions] = useState(0);
	const [count, setCount] = useState(0);
	const [autoStart, setAutoStart] = useState(false);

	const value: ValueProviderContext = {
		workSlider,
		breakSlider,
		rounds,
		sessions,
		count,
		autoStart,
		setAutoStart,
		setCount,
		setWorkSlider,
		setSessions,
		setBreakSlider,
		setRounds,
	};

	return (
		<MyValueContext.Provider value={{ children, ...value }}>
			{children}
		</MyValueContext.Provider>
	);
};
