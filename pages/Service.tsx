import Head from 'next/head';
import Image from 'next/image';
import { getSession } from "next-auth/react";

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

export async function getServerSideProps(context) {
 	const session = await getSession({ req: context.req });

  	if (session) {
    	return {
      		redirect: {
        		destination: '/Dashboard',
        		permanent: false,
      		},
    	};
  	}

  	return {
    	props: { session },
  	};
}