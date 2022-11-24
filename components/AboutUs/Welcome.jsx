import styles from '/components/css/About/AboutWelcome.module.css';

const Welcome = () => {
	return(
		<div className={styles.container}>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<p>What we do here?</p>
					<h1>About Us</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>				
			</div>
			<div className={styles.image}>
			</div>	
		</div>
	);
};

export default Welcome;