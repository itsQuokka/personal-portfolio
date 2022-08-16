import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import emailjs from '@emailjs/browser';

const Result = () => {
	return (
		<div className="mt-[200px] ml-[200px] animate-bounce">
			<h2 className="text-[#484888]/80 whitespace-nowrap">Message Sent!</h2>
		</div>
	);
};

const Contact = () => {
	const [result, showResult] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_mt6h01a', 'template_6gilczb', e.target, '44QSn9S6u86xwdVDj').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
		showResult(true);
	};

	setTimeout(() => {
		showResult(false);
	}, 5000);

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
								{!result ? (
									<form className="pl-6" onSubmit={sendEmail}>
										<h2 className="text-[#484888]/80 whitespace-nowrap">Send me a message!</h2>
										<div className="grid md:grid-cols-2 gap-4 w-full py-2">
											<div className="flex flex-col">
												<label className="uppercase text-sm py-2 text-[#484888]">Name</label>
												<input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="fullName" />
											</div>
										</div>
										<div className="flex flex-col py-2">
											<label className="uppercase text-sm py-2 text-[#484888]">Email</label>
											<input className="border-2 rounded-lg p-3 flex border-gray-300" name="email" type="email" />
										</div>
										<div className="flex flex-col py-2">
											<label className="uppercase text-sm py-2 text-[#484888]">Message</label>
											<textarea className="border-2 rounded-lg p-3 border-gray-300" rows="5" name="message"></textarea>
										</div>
										<button className="w-full p-4 text-gray-100 mt-4" value="Send">
											Send Message
										</button>
									</form>
								) : (
									<Result />
								)}
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
