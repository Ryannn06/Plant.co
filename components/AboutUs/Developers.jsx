import styles from '/components/css/About/Developer.module.css';

const Developer = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<h1>We are Developers of Plant.co</h1>
				<p>We are the teams of Plant.co</p>
			</div>
			<div className={styles.displaycards}>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/quirky.png" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="first">Ryan Angelo Dela Cruz</h1>
						<p>Hello! I am the project manager and main developer of this project. 
						Please enjoy and thanks for visiting.</p>
						<div className={styles.social}>
							<button>Facebook</button>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/redmask.png" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Ryan Angelo Dela Cruz</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<div className={styles.social}>
							<button>Facebook</button>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/redmask.png" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Ryan Angelo Dela Cruz</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<div className={styles.social}>
							<button>Facebook</button>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Developer;