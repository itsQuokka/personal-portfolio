import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5] font-bold">01</p>
					<h2 className="py-2">About Me</h2>

					{/*<div className="max-w-[1240px] m-auto flex justify-between md:grid-cols-2 lg:grid-cols-1 gap-4">
						<div className="w-80 h-auto shadow-md shadow-gray-600 rounded-lg p-4">
							<p className="uppercase text-xl tracking-widest text-[#5651E5]">
								Name: <span className="text-gray-600">Aidan Douglas</span>
							</p>
						</div>
						<div className="w-80 h-auto shadow-md shadow-gray-600 rounded-lg p-4">
							<p className="uppercase text-xl tracking-widest text-[#5651E5]">
								Age: <span className="text-gray-600">21</span>
							</p>
						</div>
	</div> 			*/}
					<p className="mt-6 pb-4 text-gray-600">A software nerd.</p>
					<p className="py-2 text-gray-600">
						I initially got into software development with minecraft plugins - playing the game became old, so I sought out how to add cool new features. I worked as a{' '}
						<span className="text-[#5651E5]">plugin developer</span> for multiple freelance companies, was <span className="text-[#5651E5]">individually contracted</span> with private servers and
						built custom plugins for them - and from there my interest in development began!
					</p>
					<p className="py-2 text-gray-600">
						I have now began working on <span className="text-[#5651E5]">front-end</span> & <span className="text-[#5651E5]">back-end</span> web-development for freelance companies as well as to
						strengthen my understanding of CSS and JavaScript. Originally programming in <span className="text-[#5651E5]">object-oriented</span> based languages like{' '}
						<span className="text-[#5651E5]">java</span>, the transition to building websites instead of game plugins and discord bots, has been quite the change.
					</p>
					<div className="flex mt-10 pr-10 pl-4 p-0.5 mx[-180px] h-10">
						<div className="m-[1.1rem] w-[300px] mx-[-180px] p-0.5 bg-[#5651E5]/20 "></div>
						<div className="w-[310px] bg-[#5651E5]/20 shadow-lg"></div>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-[#b9c3ea] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image className="rounded-xl bg-[#cdcdcd]" src="/assets/pic.jpeg" width="1168px" height="1242px" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
