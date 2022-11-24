import styles from '/components/css/Home/Sections.module.css';

const FirstSection = () => {
	return(
		<div className={styles.container}>
			<div className = {styles.first_section}>
				<div className={styles.image}>
					<img src="/images/jadevine.svg" alt="" />
				</div>	
				<div className={styles.content}>
					<h6>What do we do?</h6>
					<h1>We organize plants for you</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<button>Learn the services &raquo;</button>
				</div>				
			</div>
		</div>
	);
};

export default FirstSection;