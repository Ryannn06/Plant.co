import {useState, useRef} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

import styles from '/components/css/Auth/Register.module.css';


async function findEmail(email, router, formRef) {
	const response = await fetch('http://localhost:3001/forgot-password', {
    	method: 'POST',
    	body: JSON.stringify({ email }),
    	headers: {
      		'Content-Type': 'application/json',
    	},
 	});

	const data = await response.json();
  	if (!response.ok) {
  		formRef.current.reset();
    	toast(data.message, { hideProgressBar: true, autoClose: 9000, type: 'error', position:'top-center' });
  	} else {
  		formRef.current.reset();
  		toast(data.message, { hideProgressBar: true, autoClose: 9000, type: 'success', position:'top-center' });
  	}
  	return data;
}

const ResetPasswordForm = () => {
	//get the data from the form
	const formRef = useRef();
	const emailInputRef = useRef();
	const router = useRouter();

	async function submitHandler(event) {
		//prevent submission
		event.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		if (enteredEmail == null || enteredEmail == ''){
			toast("Please enter your email address.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
			return
		}

		try {
			const result = await findEmail(enteredEmail, router, formRef);
			console.log(result);
		} catch (error) {
			alert(error);
		}

	}

	return(
		<div className={styles.container}>
			<div className={styles.leftside}>
				<div className={styles.credentials}>
					<h1>Forgot Password</h1>
					<p>Enter your email address registered in our system.</p>
					<form className={styles.form} onSubmit={submitHandler} ref={formRef}>
						<input type="email" name="email" placeholder="Enter your email" required ref={emailInputRef}  ></input>
						<div className={styles.submit}>
							<button type='submit'>Send reset code</button>	
						</div>	
					</form>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	);
};

export default ResetPasswordForm;