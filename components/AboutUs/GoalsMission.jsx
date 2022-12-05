import styles from '/components/css/About/GoalsMission.module.css';

const GoalsMission = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<h1>Our Goals and Mission</h1>
				<p>We are delightful to be part of your planting experience</p>
				<hr></hr>
			</div>
			<div className={styles.goals}>
				<div className = {styles.first_section}>	
					<div className={styles.content}>
						<h6>Plant.co</h6>
						<h1>Our Goals and Mission</h1>
						<p>Our goal and mission are to help the people in plant decorations have
						the best experince in their journey -- serving the best yet affordable services.
						</p>
					</div>				
				</div>	
				<div className={styles.image}>
				</div>	
			</div>
		</div>
	);
};

export default GoalsMission;