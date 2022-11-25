import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHeading from '../components/Contacts/ContactHeading';
import ContactNo from '../components/Contacts/ContactNo';
import Message from '../components/Contacts/Message';

export default function Contacts () {
	return (
		<div>
			<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar />
				<ContactHeading />
				<ContactNo />
				<Message />
				<Footer />
			</div>
		</div>
	)
}