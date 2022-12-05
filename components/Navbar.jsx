import styles from './css/Navbar.module.css';
import Link from 'next/link';
import Script from 'next/script';

const Navbar = () => {
	return(
		<div className={styles.container}>
			<div className={styles.brand}>
				<img src="/images/logo.png" />
				<a>Plant.co</a>
			</div>
			<div className={styles.navlink}> 
				<Link href='/'>Home</Link>			
				<Link href='/AboutUs'>About</Link>			
				<Link href='/Service'>Services</Link>			
				<Link href='/Contacts'>Contacts</Link>	
			</div>
			<div className={styles.ctalink}>
				<img src="/images/hamburger.png" />
			</div>

			<div className={styles.overlay}>
			    <a className={styles.close}>&times;</a>
			    <div className={styles.overlaylink}>
				    <Link href='/'>Home</Link>			
				    <Link href='/AboutUs'>About</Link>			
				    <Link href='/Service'>Services</Link>			
				    <Link href='/Contacts'>Contacts</Link>	
			    </div>
			</div>			
		</div>
	);
};

export default Navbar;