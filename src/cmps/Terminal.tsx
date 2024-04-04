import Toolbar from './Toolbar';

const Terminal = () => {
	return (
		<main className="w-1/2 to-gray-300 flex flex-col h-1/2 text-gray-300 font-josefin">
			<Toolbar />
			<div className="w-full bg-black bg-opacity-70 flex-1 rounded-b-md"></div>
		</main>
	);
};

export default Terminal;
