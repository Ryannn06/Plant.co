import styles from '/components/css/Contacts/ContactNo.module.css';

const ContactNo = () => {
	return(
		<div className={styles.container}>
			<div className={styles.image}>
			</div>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<h1>Call us directly</h1>
					<p>Rest assured that our line is open 24/7. Our great consultant and
					specialist will answer your queries directly on call.
					</p>
					<p>+63947104225</p>
				</div>				
			</div>
		</div>
	);
};

export default ContactNo;