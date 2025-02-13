import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BackgroundGradient } from "@/components/Aceternity/background-gradient";

function About() {
	return (
		<div>
			<h2
				id="about"
				className="mb-8 mt-8 text-center font-oxanium text-4xl lg:mb-0 lg:mt-0"
			>
				About Me
			</h2>
			<div className="mx-auto mt-2 flex w-full flex-col items-center justify-between md:gap-4 lg:mt-20 lg:w-11/12 lg:flex-row 2xl:w-4/5">
				<BackgroundGradient
					className="w-full"
					containerClassName="mx-auto flex w-56 flex-col items-center gap-2 self-start rounded-lg p-1 transition-transform duration-300 hover:-translate-y-2 md:w-2/5 lg:mx-16 lg:w-72 lg:-rotate-3"
				>
					<div className="mx-auto flex w-full flex-col items-center gap-2 self-start rounded-2xl bg-zinc-900 p-3">
						<Image
							alt={"/self.jpg"}
							width={1000}
							height={1000}
							loading={"lazy"}
							className="h-60 w-full rounded-2xl bg-violet-100 object-cover object-top grayscale transition-all hover:grayscale-0 md:h-80 lg:h-80"
							src={"/shinchan.jpeg"}
						/>
						<span className="font-sans font-medium dark:text-gray-300">
							{"< I Build Stuff 🚀 />"}
						</span>
					</div>
				</BackgroundGradient>
				<div className="mx-6 mt-8 flex-1 text-left md:mx-0 md:mt-0 md:p-6">
					<div className="flex flex-col gap-2.5">
						<p className="text-3xl font-semibold">Sabhya Agarwal</p>
						<p className="w-fit rounded bg-violet-50 px-2 py-1 text-sm text-violet-800 dark:bg-violet-600/15 dark:text-violet-500">
							Full stack Developer
						</p>
						<p className="text-sm text-zinc-400 md:text-lg md:font-semibold">
							Hey there! I&apos;m a full-stack developer based in Delhi.
							I&apos;m all about crafting cool digital stuff that works like a
							charm. Whether it&apos;s making sleek front-end designs or
							building sturdy back-end systems, I love turning ideas into
							reality with code. I&apos;m always up for learning new things and
							teaming up on exciting projects. Let&apos;s chat and see what
							awesome things we can create together!
						</p>
						<div className="mt-2 flex items-center gap-4 md:mt-4">
							<Link
								href="/resume.pdf"
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 md:text-base dark:bg-violet-700 hover:dark:bg-violet-800"
							>
								Resume
							</Link>
							<Link
								className="group flex w-fit cursor-pointer items-center gap-1 rounded-md bg-violet-700 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-800 md:text-base"
								href={"#skills"}
							>
								<span>My Skills</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
