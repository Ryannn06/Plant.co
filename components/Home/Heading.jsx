import styles from '/components/css/Home/Heading.module.css';

const Heading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.heading}>
				<h1>We love helping greenify your home</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<button>Apply Now &raquo;</button>
			</div>
			<div className={styles.image}>
				<img src='/images/plants.svg' />
			</div>	
		</div>
	);
};

export default Heading;