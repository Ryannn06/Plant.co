import Link from 'next/link';
import {useEffect, useState } from 'react';
import Image from 'next/Image';
import Script from 'next/Script';
import { Buffer } from 'buffer';

import styles from '/components/css/Dashboard/Gallery.module.css';

const Gallery = () => {

	const [image, setImage] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/gallery')
			.then(res => {
				return res.json()
			})
			.then(data => {
				setImage(data.image)
			})
		window.Buffer = Buffer;
	}, [])

	return(
		<div className={styles.container}>
			<Script type="text/javascript" src="/static/convert.js"></Script>
			
			<div className={styles.displaycards}>
			{image.map((data) => {
				return (
				<div className={styles.card}>
					<div>
						<p>{data.motion_id}</p>
						<Image alt="motion" src={`data:image/png;base64,${blobToBase64(data.img)}`} height='200' width='230' />
					</div>
					<div>
						<p>Date Detected: {data.stime}</p>
					</div>
				</div>
				)
			})}

			</div>	
		</div>
	);
};

export default Gallery;