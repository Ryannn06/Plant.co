import styles from '/components/css/Service/Service.module.css';

const AboutService = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<h1>Our Features & Services</h1>
				<p>We are glad to serve you the best planting experience.</p>
			</div>
			<div className={styles.displaycards}>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/interview.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="first">Consultation</h1>
						<p>Our interior design specialists are on hand 
						to give you the most exquisite and modern designs that fit your preference.</p>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/design.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Designing</h1>
						<p>Our design team will create a prototype design 
						according to what has been talked in the consultation. 
						This is to assure that you meet the right plant needs to every specific details</p>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/install.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Installation</h1>
						<p>Our team is known for completing installations of the dyanamics 
						according to the design landscape both on time and 
						within the specifc amount of budget.</p>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/garden.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Maintenance</h1>
						<p>To ensure your full best planting experince, 
						we arrange our plant technician to check regularly on the plants 
						to ensure their health and conditions.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutService;