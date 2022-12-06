import styles from '/components/css/About/AboutWelcome.module.css';

const Welcome = () => {
	return(
		<div className={styles.container}>
			<div className={styles.image}>
			</div>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<h6>About Us</h6>
					<h1>A website for plant decoration</h1>
					<p>This is a static website for offering plant decoration services to 
					plant-lover people. We assure you get the best and planty experience with
					our company.
					</p>
				</div>				
			</div>
		</div>
	);
};

export default Welcome;