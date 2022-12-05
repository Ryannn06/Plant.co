import styles from '/components/css/About/Developer.module.css';

const Developer = () => {
	return(
		<div className={styles.container}>
			<div className={styles.title}>
				<hr></hr>
				<p>We are glad to meet you</p>
				<h1>The Developers</h1>
			</div>
			<div className={styles.displaycards}>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/people.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="first">Ryan Angelo Dela Cruz</h1>
						<p>Hello! I am the main developer of this project. This our first nextjs
						static website so please enjoy and thanks for visiting.</p>
						<div className={styles.social}>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/consult.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Crisanto Areglado</h1>
						<p>Hello, I am one of the members of the group. It is a pleasure for
						your visit. Please feel welcome as you navigate website.</p>
						<div className={styles.social}>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/consult.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Dante Tiagan</h1>
						<p>Hi, it is glad to meet you. We hope you find our services ideal
						to your needs. We are looking forward to serve you.</p>
						<div className={styles.social}>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/consult.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Genesis Mislos</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<div className={styles.social}>
							<button>Gmail</button>
							<button>Github</button>
						</div>
					</div>
				</div>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/consult.jpg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Jheremy Ituralde</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<div className={styles.social}>
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