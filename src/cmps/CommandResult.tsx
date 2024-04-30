import React from 'react';
import { FaSass } from 'react-icons/fa';
import {
	SiExpress,
	SiGithub,
	SiGraphql,
	SiJest,
	SiLinkedin,
	SiMongodb,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiSocketdotio,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { ICommand } from './Terminal';
import CheckMarkIcon from '/src/assets/icons/check-mark.svg?react';

const CommandResult = ({ command }: { command: ICommand }) => {
	const renderComponent = () => {
		switch (command.txt.toLowerCase().trim()) {
			case 'help':
				return <Help />;
			case 'bio':
				return <Bio />;
			case 'skills':
				return <Skills />;
			case 'contact':
				return <Contact />;
			case 'about':
				return <About />;
			case 'projects':
				return <Projects />;
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

			<div className="text-yellow-400">projects</div>
			<div>List of all projects</div>

			<div className="text-yellow-400">ctrl + l</div>
			<div>clear terminal</div>
		</div>
	);
};

const Bio = () => {
	return (
		<section>
			<div className="flex mb-3">
				<img className="rounded-full w-40 h-40 border-2 border-yellow-200" src="/ido-img.jpeg" alt="Ido's image" />
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
			<div className="grid my-2 grid-auto-flow">
				<BioUrlSection Icon={SiGithub} url={'https://github.com/Ido-Kadosh'} title="Github" urlText="@Ido-kadosh" />
				<BioUrlSection
					Icon={SiLinkedin}
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
			<div className="flex gap-1 ">
				<Icon className="text-yellow-400 w-6 h-6" />
				<span className="text-yellow-400 min-w-max">{title}</span>
			</div>
			<a target="_blank" rel="noopener noreferrer" href={url} className="underline text-blue-300 min-w-max">
				{urlText}
			</a>
		</div>
	);
};

const Skills = () => {
	return (
		<section>
			<div>
				<h2 className="text-yellow-400 mb-3">Front End Technologies</h2>
				<div className="grid grid-auto-flow gap-3 mb-4">
					<SkillItem Icon={SiReact} text="React" />
					<SkillItem Icon={TbBrandTypescript} text="Typescript" />
					<SkillItem Icon={SiTailwindcss} text="Tailwind" />
					<SkillItem Icon={FaSass} text="SASS" />
					<SkillItem Icon={SiRedux} text="Redux" />
					<SkillItem Icon={SiJest} text="Jest" />
				</div>
				<h2 className="text-yellow-400 mb-3">Back End Technologies</h2>
				<div className="grid grid-auto-flow gap-3 mb-4">
					<SkillItem Icon={SiNodedotjs} text="Node.js" />
					<SkillItem Icon={SiExpress} text="Express" />
					<SkillItem Icon={SiGraphql} text="GraphQL" />
					<SkillItem Icon={SiMongodb} text="MongoDB" />
					<SkillItem Icon={SiPostgresql} text="PostgreSQL" />
					<SkillItem Icon={SiSocketdotio} text="Socket.io" />
				</div>
			</div>
		</section>
	);
};

interface SkillItemProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	text: string;
}
const SkillItem = ({ Icon, text }: SkillItemProps) => {
	return (
		<div className="flex gap-2 items-center">
			<Icon className="text-3xl" />
			<span className="text-xl">{text}</span>
		</div>
	);
};

const Contact = () => {
	return (
		<section className="grid grid-cols-2">
			<span className="text-yellow-400">Phone number</span>
			<span>
				<a target="_blank" rel="noopener noreferrer" href="tel:972585599522" className="underline text-blue-300">
					+972-58-559-9522
				</a>
			</span>
			<span className="text-yellow-400">Email</span>
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
	return (
		<section>
			<h2 className="text-yellow-400 text-2xl">Terminal Portfolio</h2>
			<p className="mb-3">This was designed to let you go through my portfolio in a terminal way. </p>
			<h2 className="text-yellow-400 text-2xl">Tech Stack</h2>
			<p className="mb-3">This site is written with React and Tailwind only. It's a front-end only site!</p>
			<div className="flex gap-5 text-4xl">
				<SiReact className="text-blue-500 scale-100" />
				<SiTailwindcss className="text-blue-300 scale-100" />
			</div>
		</section>
	);
};

const Projects = () => {
	return (
		<section>
			<h1 className="text-yellow-400 text-2xl mb-4">Project list: (press image to enter site)</h1>
			<div className="flex  flex-wrap gap-10">
				<ProjectItem title="sunday" imgUrl="/sunday.png" url="https://sunday-twm1.onrender.com" />
				<ProjectItem title="car rental" imgUrl="/car-rental.png" url="https://car-rental-teal-eight.vercel.app" />
				<ProjectItem
					title="terminal portfolio"
					imgUrl="/terminal-portfolio.png"
					url="https://en.wikipedia.org/wiki/Recursion"
				/>
			</div>
		</section>
	);
};

interface ProjectItemProps {
	title: string;
	imgUrl: string;
	url: string;
}
const ProjectItem = ({ title, imgUrl, url }: ProjectItemProps) => {
	return (
		<div>
			<h2 className="capitalize mb-1">{title}</h2>
			<a target="_blank" rel="noopener noreferrer" href={url} className="underline text-blue-300 max-w-fit block">
				<img src={imgUrl} alt={`${title} project`} className="max-h-60" />
			</a>
		</div>
	);
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
