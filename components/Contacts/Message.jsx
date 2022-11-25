import styles from '/components/css/Contacts/Message.module.css';

const Message = () => {
	return(
		<div className={styles.container}>
			<div className={styles.form}>
				<p>You may leave us a message here and we will respond to your email address the
				soonest posible. Have a planty greeny day!</p>
				<div className={styles.name}>
					<input type="text" id="fname" placeholder="Enter First Name"></input>
					<input type="text" id="lname" placeholder="Enter Last Name"></input>
				</div>
				<input type="email" id="email" placeholder="Email Address" />
				<input type="text" id="subject" placeholder="Enter subject" />
				<textarea type="text" id="message" placeholder="Enter message"></textarea>
				<div className={styles.submit}>
					<a>Submit a message</a>	
				</div>	
			</div>
		</div>
	);
};

export default Message;