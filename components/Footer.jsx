import styles from '/components/css/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
	return(
		<div className={styles.container}>	
			<div className={styles.brand}>
				<img src='/images/logowhite.png'/>
				<a>Plant.co</a>
			</div>	
			<div className={styles.navlink}>
				<Link href='/'>Home</Link>			
				<Link href='/AboutUs'>About</Link>			
				<Link href='/Service'>Services</Link>			
				<Link href='/Contacts'>Contacts</Link>	
			</div>	
		</div>
	);
};

export default Footer;