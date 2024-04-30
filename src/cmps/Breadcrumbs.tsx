import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import ArrowIcon from '../assets/icons/arrow.svg?react';
import CloverIcon from '../assets/icons/clover.svg?react';
import CommandIcon from '../assets/icons/command.svg?react';
import FolderIcon from '../assets/icons/folder.svg?react';
import CommandResult from './CommandResult';
import { ICommand } from './Terminal';
import useScreenSize from '../hooks/useScreenSize';
interface PropTypes {
	showInput?: boolean;
	command?: ICommand;
	commandHistory?: string[];
	setCommandHistory?: Dispatch<SetStateAction<string[]>>;
	setCommands: Dispatch<SetStateAction<ICommand[]>>;
}

const Breadcrumbs = ({ showInput, command, commandHistory, setCommands, setCommandHistory }: PropTypes) => {
	const elInput = useRef<HTMLInputElement>(null);
	const commandIndex = useRef<number>(0);
	const screenSize = useScreenSize();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!elInput.current) return;
			elInput.current.focus();
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') clearConsole(e);
			else if (e.key === 'ArrowUp') restorePreviousCommand(1);
			else if (e.key === 'ArrowDown') restorePreviousCommand(-1);
			else if (e.key === 'Enter') sendCommand();
		};

		if (showInput) document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [commandHistory]);

	const sendCommand = () => {
		if (!elInput.current) return;
		const command = elInput.current.value;
		if (!command) return;
		elInput.current.value = '';

		setCommands(prev => [...prev, { txt: command, time: Date.now() }]);
		setCommandHistory?.(prev => [...prev, command]);
	};

	const clearConsole = (e: KeyboardEvent) => {
		e.preventDefault();
		commandIndex.current = 0;
		if (elInput.current) elInput.current.value = '';
		setCommands([]);
	};

	const restorePreviousCommand = (direction: number) => {
		if (!elInput.current || !commandHistory) return;
		const lastCommand = commandHistory[commandHistory.length - direction - commandIndex.current];
		if (!lastCommand) return;
		elInput.current.value = lastCommand;
		commandIndex.current = commandIndex.current + direction;
		setTimeout(() => {
			elInput?.current?.setSelectionRange(lastCommand.length, lastCommand.length);
		}, 0); // wait for value to be set
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
		<section className="my-4">
			<div className="flex items-center truncate">
				<div className="w-5 h-1 bg-blue-600"></div>
				<div className="flex items-center">
					<div className="flex gap-1 items-center bg-green-700 ps-2">
						<CloverIcon />
						<span>idokadosh</span>
					</div>
					<div className="w-5 h-7 z-10 bg-green-700 triangle"></div>
				</div>
				{
					<div className="flex items-center text-black">
						<div className="flex gap-1 items-center bg-blue-400 ps-8 -translate-x-5 pe-1">
							<FolderIcon />
							<span>/portfolio</span>
						</div>
						<div className="w-5 h-7 z-10 -translate-x-5 bg-blue-400 triangle border-l border-blue-400"></div>
					</div>
				}
				{command && (
					<div className="flex items-center text-black max-w-52 text-ellipsis">
						<div className="flex gap-1 items-center bg-yellow-400 ps-8 -translate-x-10 pe-1">
							<CommandIcon />
							<span>{command.txt}</span>
						</div>
						<div className="w-5 h-7 z-10 -translate-x-10 bg-yellow-400 triangle border-l border-yellow-400"></div>
					</div>
				)}
			</div>
			<div className="flex items-center w-full">
				<div className="h-10 w-1 bg-blue-600 -translate-y-3"></div>
				<div className="h-1 w-4 bg-blue-600 translate-y-2 -translate-x-1 "></div>
				<ArrowIcon className="text-2xl text-blue-500 -translate-x-3 translate-y-2" />
				<div className="self-end flex-1">
					{showInput && (
						<input
							ref={elInput}
							autoFocus
							className="bg-transparent border-none outline-none text-gray-300 w-full placeholder:tracking-wider placeholder:text-gray-600"
							placeholder={
								screenSize.width > 1024 ? 'try help, bio, skills, projects, contact...' : 'type help for info'
							}
							type="text"
						></input>
					)}
					{command && (
						<div className="flex justify-between items-end  ">
							<span className="truncate">{command.txt}</span>
							<span className="me-3 text-sm min-w-max">{getFormattedTime(command.time)}</span>
						</div>
					)}
				</div>
			</div>
			{command && <CommandResult command={command} />}
		</section>
	);
};

export default Breadcrumbs;
