import styles from '/components/css/About/Developer.module.css';

const Developer = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<p>Hello, we are glad to meet you here!</p>
				<h1>Who We Are</h1>
			</div>
			<div className={styles.displaycards}>

				<div className={styles.cardimage}>
					<div className={styles.image}>
						<img src="/images/welcome.svg" alt="" />
					</div>
				</div>			

				<div className={styles.cardtext}>
					<div className={styles.content}>
						<h1 variant="third">We Are The Code Robots</h1>
						<p>Hi, we are students composed of five
						members in the team-- Ryan, Areglado, Tiagan, 
						Mislos and Ituralde. We like programming as much as we care for the environment.</p>
					</div>
				</div>

				<div className={styles.cardtext_2}>
					<div className={styles.content_1}>
						<h1 variant="third">For The Environment</h1>
						<p>This is our first static website about plant decoration in Nextjs. We believe
						that this way we can express our interest in nature and the environment.</p>
					</div>
				</div>

				<div className={styles.cardimage_2}>
					<div className={styles.image}>
						<img src="/images/nature.svg" alt="" />
					</div>
				</div>	

			</div>
		</div>
	);
};

export default Developer;