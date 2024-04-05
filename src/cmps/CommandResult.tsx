import { ICommand } from './Terminal';

const CommandResult = ({ command }: { command: ICommand }) => {
	const renderComponent = () => {
		switch (command.txt) {
			case 'help':
				return <Help />;
			case 'bio':
				return <Bio />;
			case 'contact':
				return <Contact />;
			case 'about':
				return <About />;
			default:
				return <NotFound />;
		}
	};

	return <div className="px-11 my-2">{renderComponent()}</div>;
};

const Help = () => {
	return (
		<div className="grid grid-cols-[10rem_1fr] gap-3">
			<div className="text-yellow-400">bio</div>
			<div>Show my bio information</div>

			<div className="text-yellow-400">skills</div>
			<div>List all of my skills</div>

			<div className="text-yellow-400">contact</div>
			<div>List contact information</div>

			<div className="text-yellow-400">about</div>
			<div>information about this site</div>

			<div className="text-yellow-400">ctrl + l</div>
			<div>clear terminal</div>
		</div>
	);
};

const Bio = () => {
	return <div>bio</div>;
};

const Contact = () => {
	return <div>contact</div>;
};

const About = () => {
	return <div>About</div>;
};

const NotFound = () => {
	return (
		<div>
			<div className="text-red-400">Command not found</div>
			<div>Try: help</div>
		</div>
	);
};

export default CommandResult;
