import styles from './css/Navbar.module.css';

const Navbar = () => {
	return(
		<div className={styles.container}>
			<div className={styles.brand}>
				<a>Plant.co</a>
			</div>
			<div className={styles.navlink}> 
				<a href='/'>Home</a>			
				<a href='/AboutUs'>About</a>			
				<a>Services</a>			
				<a href='/Contacts'>Contacts</a>	
			</div>
			<div className={styles.ctalink}>
				<img src="/images/hamburger.png" />
			</div>

			<div className={styles.overlay}>
			    <a className="close">&times;</a>
			    <div className={styles.overlaylink}>
				    <a>Home</a>			
				    <a>About</a>			
				    <a>Services</a>			
				    <a>Contacts</a>	
			    </div>
			</div>				
		</div>
	);
};

export default Navbar;