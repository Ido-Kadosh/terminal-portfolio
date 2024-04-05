import { ICommand } from './Terminal';

const CommandResult = ({ command }: { command: ICommand }) => {
	const renderComponent = () => {
		switch (command.txt) {
			case 'help':
				return <div>help</div>;
			case 'bio':
				return <div>bio</div>;
			case 'contact':
				return <div>contact</div>;
			case 'about':
				return <div>about</div>;
			default:
				return <div>error</div>;
		}
	};

	return <div className="px-11">{renderComponent()}</div>;
};

export default CommandResult;
