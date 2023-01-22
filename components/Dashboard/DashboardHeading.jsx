import Link from 'next/link';
import { useSession } from 'next-auth/react';

import styles from '/components/css/Dashboard/DashboardHeading.module.css';

const DashboardHeading = () => {
	const { data: session, status } = useSession();

	return(
		<div className={styles.container}>	
			<div className={styles.card}>
				<div>
					<h1>Nice to meet you, 
						<span className={styles.user}> {session.user.email} </span>
						!
					</h1>
					<p>Showing a gallery for detected motions</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeading;