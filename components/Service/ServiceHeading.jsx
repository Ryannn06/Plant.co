import styles from '/components/css/Service/Heading.module.css';

const ServiceHeading= () => {
	return(
		<div className={styles.container}>
			<div className={styles.image}>
			</div>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<p>Welcome to Plant.co</p>
					<h1>Our Features & Services</h1>
					<p>If you have further question or need some assitance, you may
					contact us with the following means below.
					</p>
				</div>				
			</div>		
		</div>
	);
};

export default ServiceHeading;