import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar';
import Heading from '../components/Home/Heading';
import WhatWeHave from '../components/Home/WhatWeHave';
import FirstSection from '../components/Home/FirstSection';
import SecondSection from '../components/Home/SecondSection';
import Qoute from '../components/Home/Qoute';
import Qoute2 from '../components/Home/Qoute2';
import BeforeFooter from '../components/Home/BeforeFooter';
import Footer from '../components/Footer';
import Cards from '../components/Home/Cards';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
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

  )
}
