import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Aidan | Front-End Developer</title>
				<meta name="description" content="Portfolio Project" />
				<link rel="icon" className="bg-white" href="/assets/logo.png" />
			</Head>

			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
