import React from 'react';
import portfolio from '../public/assets/projects/portfolio.png';
import baymax from '../public/assets/projects/baymaxex.png';

import ProjectItem from '../components/ProjectItem';
import Image from 'next/image';

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-gray-400 font-bold pt-4 mt-[60px]">03</p>
				<h2 className="py-2 text-[#484888]">Projects</h2>

				<div className="grid grid-cols-2 gap-8 mt-4 pb-8 pt-6">
					<div className=" h-auto">
						<div className="ml-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={portfolio} projectUrl="/projectOne" />
						</div>
					</div>

					<div className=" h-auto">
						<div className="mr-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={baymax} projectUrl="/projectOne" />
						</div>
					</div>

					<div className=" h-auto">
						<div className="ml-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={portfolio} projectUrl="/projectOne" />
						</div>
					</div>

					<div className=" h-auto">
						<div className="mr-[10px]">
							<ProjectItem title="Portfolio" backgroundImg={baymax} projectUrl="/projectOne" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
