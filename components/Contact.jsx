import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tracking-widest uppercase text-gray-400 font-bold pt-4 mt-12">04</p>
				<h2 className="py-2 text-[#484888]">Contact Me</h2>
				<div className="flex w-full h-full rounded-xl p-4 bg-white">
					<div className="w-full h-auto rounded-xl lg:p-4">
						<div className="grid grid-cols-2 gap-2">
							<div className="pr-10 mr-6 skew-x-6 -skew-y-6 scale-[80%] drop-shadow-lg">
								<Image className="rounded-xl  bg-[#484888]" src="/assets/contact.jpg" width="1168px" height="1242px" alt="/" />
							</div>
							<div className="p-2">
								<form className="pl-6">
									<h2 className="text-[#484888]/80 whitespace-nowrap">Send me a message!</h2>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label className="uppercase text-sm py-2 text-[#484888]">Name</label>
											<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
										</div>
									</div>
									<div className="flex flex-col py-2">
										<label className="uppercase text-sm py-2 text-[#484888]">Email</label>
										<input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
									</div>
									<div className="flex flex-col py-2">
										<label className="uppercase text-sm py-2 text-[#484888]">Message</label>
										<textarea className="border-2 rounded-lg p-3 border-gray-300" rows="5"></textarea>
									</div>
									<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center py-12">
				<Link href="/">
					<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
						<HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Contact;
