import styles from '/components/css/Footer.module.css';

const Footer = () => {
	return(
		<div className={styles.container}>	
			<div className={styles.brand}>
				<a>Plant.co</a>
			</div>	
			<div className={styles.navlink}>
				<a href='/'>Home |</a>
				<a href='/AboutUs'>About |</a>
				<a>Services |</a>
				<a href='/Contacts'>Contacts</a>
			</div>	
		</div>
	);
};

export default Footer;