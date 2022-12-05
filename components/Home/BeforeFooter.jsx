import Link from 'next/link';
import styles from '/components/css/Home/Before.module.css';

const BeforeFooter = () => {
	return(
		<div className={styles.container}>
			<div className={styles.beforefooting}>
				<h1>Want to know more?</h1>
				<p>Get to know the team behind this company</p>
				<button>
					<Link href="/AboutUs">Take me to the About &raquo;</Link>
				</button>
			</div>	
		</div>
	);
};

export default BeforeFooter;