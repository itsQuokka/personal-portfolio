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
				<p className="text-xl tracking-widest uppercase text-[#5651e5] font-bold pt-4">04</p>
				<h2 className="py-2 mt-2">Contact Me</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 md:col-span-1 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 bg-white">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									width="350"
									height="350"
									src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.2.1858516299.1660531079"
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2 text-[#5651e5]">Aidan Douglas</h2>
								<p className="tracking-wide uppercase">Front-End Developer</p>
								<p className="mt-6">Let&apos;s get started, contact me today!</p>
							</div>
							<div className="w-full">
								<p className="uppercase pt-8 text-[#5651e5] mt-[90px]">Connect Now!</p>
								<div className="flex items-center justify-between py-4">
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<Link href="https://www.linkedin.com/in/aidan-douglas-aa86801a3/" passHref>
											<a target="_blank" rel="noopener noreferrer">
												<FaLinkedinIn />
											</a>
										</Link>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<Link href="https://github.com/itsquokka" passHref>
											<a target="_blank" rel="noopener noreferrer">
												<FaGithub />
											</a>
										</Link>
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<AiOutlineMail />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Right Side */}
					<div className="col-span-3 w-full h-auto shadow-xl shadow-[#5651e5]/50 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2 text-[#5651e5]">Name</label>
										<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2 text-[#5651e5]">Phone (Optional)</label>
										<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-[#5651e5]">Email</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-[#5651e5]">Subject</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2 text-[#5651e5]">Message</label>
									<textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10"></textarea>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
							</form>
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
		</div>
	);
};

export default Contact;
