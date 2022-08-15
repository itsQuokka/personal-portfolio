import React from 'react';
import portfolio from '../public/assets/projects/portfolio.png';
import baymax from '../public/assets/projects/baymax.jpeg';

import ProjectItem from '../components/ProjectItem';
import Image from 'next/image';

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold pt-4">03</p>
				<h2 className="py-2">Projects</h2>

				<div className="grid grid-cols-20/80 w-full py-4">
					<div className=" bg-gradient-to-r from-[#b4b4b7]/70 to-[#2556c1]/70 border-2 border-[#4363ad] rounded">
						<h3 className="pt-2 text-2xl text-white tracking-wider text-center">Portfolio</h3>
						<p className="pb-4 pt-2 text-white text-center">React / Tailwind CSS</p>

						<p className="pt-4 mt-8 pb-4 text-white uppercase text-center bg-white/20 hover:bg-white/70 hover:text-gray-800 hover:cursor-pointer">Live View</p>
						<p className="pt-4 mt-8 pb-4 text-white uppercase text-center bg-white/20  hover:bg-white/70 hover:text-gray-800 hover:cursor-pointer">Code</p>
					</div>
					<div className=" h-auto">
						<div className="ml-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={portfolio} projectUrl="/projectOne" />
						</div>
					</div>
				</div>

				<div className="grid grid-cols-80/20 w-full py-4">
					<div className=" h-auto">
						<div className="mr-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={baymax} projectUrl="/projectOne" />
						</div>
					</div>
					<div className=" bg-gradient-to-r from-[#b4b4b7]/70 to-[#2556c1]/70 border-2 border-[#4363ad] rounded">
						<h3 className="pt-2 text-2xl text-white tracking-wider text-center">Baymax II</h3>
						<p className="pb-4 pt-2 text-white text-center">NodeJS / Javascript</p>

						<p className="pt-4 mt-8 pb-4 text-white uppercase text-center bg-white/20 hover:bg-white/70 hover:text-gray-800 hover:cursor-pointer">Live View</p>
						<p className="pt-4 mt-8 pb-4 text-white uppercase text-center bg-white/20  hover:bg-white/70 hover:text-gray-800 hover:cursor-pointer">Code</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
