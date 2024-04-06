import React from 'react';
import { ICommand } from './Terminal';
import CheckMarkIcon from '/src/assets/icons/check-mark.svg?react';
import GithubIcon from '/src/assets/icons/github.svg?react';
import LinkedinIcon from '/src/assets/icons/linkedin.svg?react';

const CommandResult = ({ command }: { command: ICommand }) => {
	const renderComponent = () => {
		switch (command.txt.toLowerCase()) {
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
	return (
		<section>
			<div className="flex mb-3">
				<img
					className="rounded-full w-40 h-40 border-2 border-yellow-200"
					src="/src/assets/img/ido-img.jpeg"
					alt="Ido's image"
				/>
				<div className="self-center ms-3">
					<div className="flex gap-1 items-center">
						<span className="text-2xl">Ido Kadosh</span>
						<CheckMarkIcon className="text-blue-500 text-2xl" />
					</div>
					<span className="text-lg text-gray-400">Full Stack Developer</span>
				</div>
			</div>
			<span>
				Hi there! I am a full stack developer. Passionate about learning new things related to coding. Always looking
				for ways to improve my crafts.
			</span>
			<div className="grid my-2 grid-cols-2">
				<BioUrlSection Icon={GithubIcon} url={'https://github.com/Ido-Kadosh'} title="Github" urlText="@Ido-kadosh" />
				<BioUrlSection
					Icon={LinkedinIcon}
					url={'https://www.linkedin.com/in/idokadosh'}
					title="Linkedin"
					urlText="@Idokadosh"
				/>
			</div>
		</section>
	);
};

interface BioUrlProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	url: string;
	title: string;
	urlText: string;
}
const BioUrlSection = ({ Icon, url, title, urlText }: BioUrlProps) => {
	return (
		<div className="flex gap-2">
			<div className="flex gap-1">
				<Icon className="text-yellow-200" />
				<span className="text-yellow-200">{title}</span>
			</div>
			<span>
				<a target="_blank" rel="noopener noreferrer" href={url} className="underline text-blue-300">
					{urlText}
				</a>
			</span>
		</div>
	);
};

const Contact = () => {
	return (
		<section className="grid grid-cols-2">
			<span className="text-yellow-200">Phone number</span>
			<span>
				<a target="_blank" rel="noopener noreferrer" href="tel:972585599522" className="underline text-blue-300">
					+972-58-559-9522
				</a>
			</span>
			<span className="text-yellow-200">Email</span>
			<span>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="mailto:1234kadosh@gmail.com"
					className="underline text-blue-300"
				>
					1234kadosh@gmail.com
				</a>
			</span>
		</section>
	);
};

const About = () => {
	return <section>About</section>;
};

const NotFound = () => {
	return (
		<section>
			<div className="text-red-400">Command not found</div>
			<div>Try: help</div>
		</section>
	);
};

export default CommandResult;
