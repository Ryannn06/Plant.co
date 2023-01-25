import Head from 'next/head';
import Image from 'next/image';
import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';

import Navbar from '/components/Navbar';
import Footer from '/components/Footer';
import ResetPasswordForm from '/components/Auth/ResetPasswordForm';

export default function Reset () {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar />
				<ResetPasswordForm/>
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
        		destination: '/',
        		permanent: false,
      		},
    	};
  	}

  	return {
    	props: { session },
  	};
}