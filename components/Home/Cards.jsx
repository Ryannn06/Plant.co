import styles from '/components/css/Home/Cards.module.css';

const Cards = () => {
	return(
		<div className={styles.container}>
			<div className={styles.displaycards}>
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/plant2.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="first">Inoculate</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/plant3.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="second">Sow your seeds</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>			
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/plant4.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Punt the pots</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;