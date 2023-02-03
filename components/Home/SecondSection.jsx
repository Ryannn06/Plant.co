import Link from 'next/link';
import styles from '/components/css/Home/SecondSections.module.css';

const FirstSection = () => {
	return(
		<div className={styles.container}>
			<div className = {styles.first_section}>
				<div className={styles.content}>
					<h6>Need some help?</h6>
					<h1>We've got your back</h1>
					<p>Our great consultant and specialist would be glad to answer your questions and 
					if you need further assistance, we are here to guide you.</p>
					<button><Link href="/Contacts">Contact Us &raquo;</Link></button>
				</div>				
			</div>
		</div>
	);
};

export default FirstSection;