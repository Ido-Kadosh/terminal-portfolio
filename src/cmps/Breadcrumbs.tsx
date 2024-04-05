import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ICommand } from './Terminal';
import CommandResult from './CommandResult';

interface PropTypes {
	showInput?: boolean;
	command?: ICommand;
	setCommands: Dispatch<SetStateAction<ICommand[]>>;
}

const Breadcrumbs = ({ showInput, command, setCommands }: PropTypes) => {
	const elInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!elInput.current) return;
			elInput.current.focus();
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') clearConsole(e);
			if (e.key === 'Enter') sendCommand();
		};

		if (showInput) document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	const sendCommand = () => {
		if (!elInput.current) return;
		const command = elInput.current.value;
		if (!command) return;
		elInput.current.value = '';
		setCommands(prev => [...prev, { txt: command, time: Date.now() }]);
	};

	const clearConsole = (e: KeyboardEvent) => {
		e.preventDefault();
		setCommands([]);
	};

	const getFormattedTime = (time: number) => {
		const now = new Date(time);
		let hours = now.getHours();
		const minutes = now.getMinutes();
		const seconds = now.getSeconds();
		const ampm = hours >= 12 ? 'PM' : 'AM';

		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		const formattedHours = hours < 10 ? '0' + hours : hours;
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
		const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

		return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
	};

	return (
		<section className="my-2">
			<div className="flex items-center">
				<div className="w-5 h-1 bg-blue-600"></div>
				<div className="flex gap-1 items-center bg-green-700 ps-2">
					<span>idokadosh</span>
				</div>
				<div className="w-5 h-7 z-10 bg-green-700 triangle"></div>
				<div className="flex items-center text-black">
					<div className="bg-blue-400 ps-8 -translate-x-5 pe-1">
						<span>/portfolio</span>
					</div>
					<div className="w-5 h-7 z-10 -translate-x-5 bg-blue-400 triangle border-l border-blue-400"></div>
				</div>
				{command && (
					<div className="flex items-center text-black">
						<div className="bg-yellow-400 ps-8 -translate-x-10 pe-1">
							<span>{command.txt}</span>
						</div>
						<div className="w-5 h-7 z-10 -translate-x-10 bg-yellow-400 triangle border-l border-yellow-400"></div>
					</div>
				)}
			</div>
			<div className="flex items-center w-full">
				<div className="h-10 w-1 bg-blue-600 -translate-y-3"></div>
				<div className="h-1 w-4 bg-blue-600 translate-y-2 -translate-x-1 "></div>
				<svg
					fill="currentColor"
					strokeWidth="0"
					viewBox="0 0 6 16"
					className="text-2xl text-blue-500 -translate-x-3 translate-y-2"
					height="1em"
					width="1em"
				>
					<path fillRule="evenodd" d="M0 14l6-6-6-6v12z"></path>
				</svg>
				<div className="self-end flex-1">
					{showInput && (
						<input
							ref={elInput}
							autoFocus
							className="bg-transparent border-none outline-none text-gray-300 w-full placeholder:tracking-wider placeholder:text-gray-600"
							placeholder="try help, bio, skills, contact, about..."
							type="text"
						></input>
					)}
					{command && (
						<div className="flex justify-between items-end">
							<span>{command.txt}</span>
							<span className="me-3 text-sm">{getFormattedTime(command.time)}</span>
						</div>
					)}
				</div>
			</div>
			{command && <CommandResult command={command} />}
		</section>
	);
};

export default Breadcrumbs;
