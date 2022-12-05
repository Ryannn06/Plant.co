import Link from 'next/link';
import styles from '/components/css/Home/Sections.module.css';

const FirstSection = () => {
	return(
		<div className={styles.container}>
			<div className = {styles.first_section}>
				<div className={styles.image}>
					<img src="/images/plantdecor3.jpg" alt="" />
				</div>	
				<div className={styles.content}>
					<h6>What do we do?</h6>
					<h1>We organize plants for you</h1>
					<p>We love to greenify the environment and so is your home. The Plant.co
					would love to be part of your planting experience. Check our best yet cost-effective
					services here.</p>
					<button><Link href="/Service">Learn the services &raquo;</Link></button>
				</div>				
			</div>
		</div>
	);
};

export default FirstSection;