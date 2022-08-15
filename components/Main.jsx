import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">Let&apos;s build something together!</p>
					<h1 className="py-4 text-gray-600">
						Hi, I&apos;m <span className="text-[#484888]">Aidan</span>
					</h1>
					<h1 className="py-2 text-gray-600">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I&apos;m a front-end web developer, specializing in the beautiful designing of digital experiences. Currently, I am focused on building responsive front-end web applications.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/aidan-douglas-aa86801a3/">
							<div className="rounded-full bg-[#484888] text-white shadow-lg shadow-gray-400 hover:shadow-[#484888] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</a>
						<a target="_blank" rel="noopener noreferrer" aria-label="Github" href="https://github.com/itsquokka">
							<div className="rounded-full bg-[#484888] text-white shadow-lg shadow-gray-400 hover:shadow-[#484888] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<a target="_blank" rel="noopener noreferrer" aria-label="Github" href="mailto:aidan.douglas23@hotmail.com">
							<div className="rounded-full bg-[#484888] text-white shadow-lg shadow-gray-400 hover:shadow-[#484888] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
