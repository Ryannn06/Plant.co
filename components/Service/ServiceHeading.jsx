import styles from '/components/css/Service/Heading.module.css';

const ServiceHeading= () => {
	return(
		<div className={styles.container}>
			<div className={styles.image}>
			</div>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<h6>Welcome to Plant.co</h6>
					<h1>Our Features & Services</h1>
					<p>Our company is dedicated to offer you a 
					great experience to your plant decoration. 
					Below are the composition of our services.
					</p>
				</div>				
			</div>		
		</div>
	);
};

export default ServiceHeading;