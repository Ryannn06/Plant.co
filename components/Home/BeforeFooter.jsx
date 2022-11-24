import styles from '/components/css/Home/Before.module.css';

const BeforeFooter = () => {
	return(
		<div className={styles.container}>
			<div className={styles.beforefooting}>
				<h1>Want to know more?</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<a href='/AboutUs'>Take me to the About &raquo;</a>
			</div>	
		</div>
	);
};

export default BeforeFooter;