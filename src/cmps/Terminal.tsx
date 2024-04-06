import { useLayoutEffect, useRef, useState } from 'react';
import Breadcrumbs from './Breadcrumbs';
import Toolbar from './Toolbar';

export interface ICommand {
	txt: string;
	time: number;
}

const Terminal = () => {
	const [commands, setCommands] = useState<ICommand[]>([{ txt: 'help', time: Date.now() }]);
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [commands]);

	const getFormattedDate = () => {
		const date = new Date(); // Today's date
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: '2-digit',
		};
		const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');
		return formattedDate;
	};

	return (
		<main className="w-full 2xl:w-1/2 lg:w-2/3 h-full overflow-auto lg:h-1/2 max-w-7xl text-xl to-gray-300 flex flex-col  text-gray-300 font-josefin">
			<Toolbar />
			<div
				ref={scrollRef}
				className="w-full bg-black bg-opacity-70 lg:h-[55vh] flex:1 overflow-y-auto overflow-x-hidden hide-scrollbar rounded-b-md p-2 border-slate-800 border"
			>
				<h1>Today is {getFormattedDate()}</h1>
				{commands.map((command, idx) => (
					<Breadcrumbs key={idx} command={command} setCommands={setCommands} />
				))}
				<Breadcrumbs
					showInput
					commandHistory={commandHistory}
					setCommandHistory={setCommandHistory}
					setCommands={setCommands}
				/>
			</div>
		</main>
	);
};

export default Terminal;
