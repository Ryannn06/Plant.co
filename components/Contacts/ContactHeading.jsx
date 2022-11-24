import styles from '/components/css/Contacts/ContactHeading.module.css';

const ContactHeading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.image}>
			</div>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<p>Need some help?</p>
					<h1>Contact Us</h1>
					<p>If you have further question or need some assitance, you may
					contact us with the following means below.
					</p>
				</div>				
			</div>
		</div>
	);
};

export default ContactHeading;