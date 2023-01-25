import Head from 'next/head';
import Image from 'next/image';
import { getSession } from "next-auth/react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardHeading from '../components/Dashboard/DashboardHeading';
import Gallery from '../components/Dashboard/Gallery';

export default function ForgotPassword () {
	return (
		<div>
			<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar />
				<DashboardHeading />
				<Gallery />
			</div>
		</div>
	)
}

export async function getServerSideProps(context) {
 	const session = await getSession({ req: context.req });

  	if (!session) {
    	return {
      		redirect: {
        		destination: '/',
        		permanent: false,
      		},
    	};
  	}

  	return {
    	props: { session },
  	};
}