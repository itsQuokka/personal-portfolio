import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 pt-[80px]">
				<div className="col-span-1">
					<p className="uppercase text-xl tracking-widest text-gray-400 mt-[80px] font-bold">01</p>
					<h2 className="py-2 text-[#484888]">About Me</h2>
					<div className="ml-4 pt-4">
						<p className="py-2 text-gray-800">
							I initially got into software development with minecraft plugins - playing the game became old, so I sought out how to add cool new features. I worked as a plugin developer for multiple
							freelance companies, was individually contracted with private servers and built custom plugins for them - and from there my interest in development began!
						</p>
						<p className="py-2 text-gray-800">
							I have now began working on front-end & back-end web-development for freelance companies as well as to strengthen my understanding of CSS and JavaScript. Originally programming in
							object-oriented based languages like java, the transition to building websites instead of game plugins and discord bots, has been quite the change.
						</p>
					</div>
					<div className="flex mt-10 pr-10 pl-4 p-0.5 mx[-180px] h-10">
						<div className="m-[1.1rem] w-[300px] mx-[-180px] p-0.5 bg-[#484888] "></div>
						<div className="w-[310px] bg-[#484888] shadow-lg"></div>
					</div>
				</div>
				<div className="col-span-1 flex pl-6 skew-y-6 drop-shadow-md scale-[75%] scale-x-[-1]">
					<Image className="rounded-xl bg-[#484888]" src="/assets/about.jpg" width="1168px" height="1242px" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
