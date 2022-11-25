import styles from '/components/css/Service/Service.module.css';

const AboutService = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<h1>Our Features & Services</h1>
				<p>We are glad to meet you</p>
			</div>
			<div className={styles.displaycards}>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/consult.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="first">Consultation</h1>
						<p>Hello! I am the project manager and main developer of this project. 
						Please enjoy and thanks for visiting.</p>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/design.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Designing</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/install.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Installation</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/maintain.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Maintenance</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutService;