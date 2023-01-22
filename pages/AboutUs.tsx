import Head from 'next/head';
import Image from 'next/image';
import { getSession } from "next-auth/react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/AboutUs/Welcome';
import Developer from '../components/AboutUs/Developers';
import GoalsMission from '../components/AboutUs/GoalsMission';
import styles from '../styles/Home.module.css';

export default function AboutUs () {
	return (
		<div>
			<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar />
				<Welcome />
				<Developer />
				<GoalsMission />
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