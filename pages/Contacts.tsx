import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeading from '../components/Contacts/ContactHeading';
import TopSection from '../components/Contacts/TopSection';

export default function Contacts () {
	return (
		<div>
			<Navbar />
			<ContactHeading />
			<TopSection />
			<Footer />
		</div>
	)
}