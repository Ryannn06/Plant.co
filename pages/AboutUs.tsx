import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHeading from '../components/AboutUs/AboutHeading';
import Welcome from '../components/AboutUs/Welcome';
import Developer from '../components/AboutUs/Developers';
import Website from '../components/AboutUs/Website';
import styles from '../styles/Home.module.css';

export default function AboutUs () {
	return (
		<div>
			<Navbar />
			<AboutHeading />
			<Welcome />
			<Developer />
			<Website />
			<Footer />
		</div>
	)
}