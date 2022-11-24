import styles from '/components/css/About/AboutHeading.module.css';

const AboutHeading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.card_bottom}>
				<div className={styles.content}>
					<h1>Message us directly</h1>
					<p>Your Name</p>
					<input></input>
					<p>Email Address</p>
					<input></input>
					<p>Subject</p>
					<input></input>
					<p>Message</p>
					<input></input>
					<p><i>Message would not be public, no worries.</i></p>
					<button>Submit a message</button>
				</div>
			</div>
		</div>
	);
};

export default AboutHeading;