import styles from '/components/css/About/AboutWebsite.module.css';

const Website = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<h1>Our Goals and Mission</h1>
				<p>This the goal and mission of Plant.co</p>
				<hr></hr>
			</div>
			<div className={styles.goals}>
				<div className = {styles.first_section}>	
					<div className={styles.content}>
						<p>What we do here?</p>
						<h1>Our Goals and Mission</h1>
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
		</div>
	);
};

export default Website;