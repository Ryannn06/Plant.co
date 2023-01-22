import Head from 'next/head'
import Image from 'next/image';
import Script from 'next/script';
import { AppProps } from 'next/app';
import { useSession } from "next-auth/react";
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

import Navbar from '../components/Navbar';
import Heading from '../components/Home/Heading';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import Qoute from '../components/Home/Qoute';
import Qoute2 from '../components/Home/Qoute2';
import BeforeFooter from '../components/Home/BeforeFooter';
import Footer from '../components/Footer';
import Cards from '../components/Home/Cards';
import DashboardHeading from '../components/Dashboard/DashboardHeading';
import styles from '../styles/Home.module.css';

export default function Home({Component, pageProps}: AppProps) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <Head>
          <title>Plant.co</title>
        </Head>
        <div>
          <Navbar />
          <DashboardHeading />
        </div>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Plant.co</title>
      </Head>
      <div>
        <Navbar />
        <Heading />
        <Qoute />
        <Cards />
        <Qoute2 />
        <FirstSection />
        <BeforeFooter />
        <SecondSection />
        <Footer />
      </div>
    </div>
    )
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}
