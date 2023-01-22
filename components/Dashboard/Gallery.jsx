import Link from 'next/link';
import {useEffect, useState } from 'react';

import styles from '/components/css/Dashboard/DashboardHeading.module.css';

const Gallery = () => {
	const [dataResponse, setdataResponse] = useState([]);
	const orig = 'http://localhost:3000';

	useEffect( ()=> {
		async function getPageData() {
	    	const apiUrlEndpoint = `http://localhost:3001/api/getdata`;
	    	const response = await fetch(apiUrlEndpoint);
	    	const res = await response.json();
	    	setdataResponse(res.results)
		}
	getPageData();
	}, []);

	return(
		<div className={styles.container}>	
			<div className={styles.card}>
				
			</div>
		</div>
	);
};

export default Gallery;