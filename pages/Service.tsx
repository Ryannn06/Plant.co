import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHeading from '../components/Service/ServiceHeading';
import AboutService from '../components/Service/AboutService';

export default function Service () {
	return (
		<div>
			<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar />
				<ServiceHeading />
				<AboutService />
				<Footer />
			</div>
		</div>
	)
}