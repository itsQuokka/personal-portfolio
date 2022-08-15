import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ backgroundImg, projectUrl }) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#b4b4b7] to-[#2556c1] border-2 border-[#4363ad]">
			<Image className="rounded-xl object-cover hover:blur-none blur-sm group-hover:opacity-80" src={backgroundImg} width="1295px" height="446px" alt="/" />
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<Link href={projectUrl}>
					<p className="text-center py-4 px-12 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
				</Link>
			</div>
		</div>
	);
};

export default ProjectItem;
