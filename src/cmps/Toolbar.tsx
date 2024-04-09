const Toolbar = () => {
	return (
		<div className="bg-slate-800 py-2 w-full rounded-t-md flex items-center fixed z-50 lg:static">
			<div className="flex gap-2 ms-3">
				<div className="rounded-full w-3 h-3 bg-red-500"></div>
				<div className="rounded-full w-3 h-3 bg-yellow-500"></div>
				<div className="rounded-full w-3 h-3 bg-green-500"></div>
			</div>
			<div className="flex-1 flex justify-center me-16">
				<span className="self-center text-base">Idokadosh/terminal_portfolio</span>
			</div>
		</div>
	);
};

export default Toolbar;
