import styles from '/components/css/About/AboutHeading.module.css';

const AboutHeading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.heading}>
				<h1>Welcome to Plant.Co</h1>
				<p>We are delightful to be part of your planting experience</p>
				<hr></hr>
			</div>
		</div>
	);
};

export default AboutHeading;