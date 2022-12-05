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
						<p>It is the process of coating the 
						seed with the bacteria that allow it to “fix” nitrogen in the soil.</p>
					</div>
				</div>			

				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/plant3.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="second">Sow your seeds</h1>
						<p>It is fine to start from scract but sowing your seeds into high quality 
						potting soil is our main goal.</p>
					</div>
				</div>			
				<div className={styles.cards}>
					<div className={styles.image}>
						<img src="/images/plant4.svg" alt="" />
					</div>
					<div className={styles.content}>
						<h1 variant="third">Punt the pots</h1>
						<p>One of the best investment is the soil blocker in 
						which scompresses loose potting soil into tight seedling blocks.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;