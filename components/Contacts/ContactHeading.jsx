import styles from '/components/css/Contacts/ContactHeading.module.css';

const ContactHeading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.heading}>
				<h1>Contact Us</h1>
				<p>Get in touch with us anywhere, anytime.</p>
				<hr></hr>
			</div>
		</div>
	);
};

export default ContactHeading;