import Image from 'next/image';
import React from 'react';

const Skills = () => {
	const Skill = ({ img, name }) => {
		let url = `/assets/skills/${img}.png`;
		return (
			<div className="p-2 rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-[#ffffff]/70 to-[#484888]/10 border border-l-[#f5f5f5]">
				<div className="grid grid-cols-2 justify-center items-center">
					<div className="">
						<Image src={url} alt="/" width="64px" height="64px" />
					</div>
					<div className="flex items-center">
						<h3 className="text-[#484888]">{name}</h3>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div id="skills" className="w-full md:h-screen p-2 items-center py-16">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-gray-400 mt-[80px] font-bold">02</p>
				<h2 className="py-2 text-[#484888]">Skills</h2>
				<div className="m-6">
					<div className="grid grid-cols-2 gap-8">
						<Skill img="javascript" name="JAVASCRIPT" />
						<Skill img="tailwind" name="TAILWIND" />
						<Skill img="react" name="REACT" />
						<Skill img="nextjs" name="NEXTJS" />
						<Skill img="html" name="HTML" />
						<Skill img="css" name="CSS" />
						<Skill img="mongo" name="MONGODB" />
						<Skill img="node" name="NODE" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
