import styles from '/components/css/Contacts/TopSection.module.css';

const TopSection = () => {
	return(
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.image}>
			
				</div>
				<div className={styles.content}>
					<h1>Call us directly</h1>
					<p>You may call us in our telephone number</p>
					<p>09471054225</p>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.image}>
					
				</div>
				<div className={styles.content}>
					<h1>Send a private message</h1>
					<p>You may email our official gmail address</p>
					<p>planet.co@gmail.com</p>
				</div>
			</div>
			<div className={styles.card_bottom}>
				<div className={styles.image}>
					
				</div>
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

export default TopSection;