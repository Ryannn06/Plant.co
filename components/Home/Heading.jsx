import Link from 'next/link';
import styles from '/components/css/Home/Heading.module.css';

const Heading = () => {
	return(
		<div className={styles.container}>
			<div className={styles.heading}>
				<h1>We love helping greenify your home</h1>
				<p>From improving your homeplant decorations to maintenance and repair-- we got your back!</p>
				<button>
					<Link href="/Service">Get started &raquo;</Link>
				</button>
			</div>
			<div className={styles.image}>
				<img src='/images/plants.svg' />
			</div>	
		</div>
	);
};

export default Heading;