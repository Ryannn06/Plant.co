import styles from '/components/css/Home/Sections.module.css';

const FirstSection = () => {
	return(
		<div className={styles.container}>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<h6>Need some help?</h6>
					<h1>We've got your back</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<button>Contact Us &raquo;</button>
				</div>	
				<div className={styles.image}>
					<img src="/images/cactus.svg" alt="" />
				</div>				
			</div>
		</div>
	);
};

export default FirstSection;