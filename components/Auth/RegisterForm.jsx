import {useState, useRef} from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

import styles from '/components/css/Auth/Register.module.css';

async function createUser(username, email, password, router, formRef) {
 	const response = await fetch('http://localhost:3001/register', {
    	method: 'POST',
    	body: JSON.stringify({ username, email, password }),
    	headers: {
      		'Content-Type': 'application/json',
    	},
 	});

 	const data = await response.json();

  	if (!response.ok) {
    	toast(data.message, { hideProgressBar: true, autoClose: 9000, type: 'error', position:'top-center' });
  	} else {
  		toast(data.message, { hideProgressBar: true, autoClose: 9000, type: 'success', position:'top-center' });
  		formRef.current.reset();
  	}
  	return data;
}

const RegisterForm = () => {

	//get the data from the form
	const formRef = useRef();

	const usernameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const confirmpasswordInputRef = useRef();

	const router = useRouter();

	//handle the form
	async function submitHandler(event) {

		//prevent submission
	    event.preventDefault();

	    const enteredUsername = usernameInputRef.current.value;
	    const enteredEmail = emailInputRef.current.value;
	    const enteredPassword = passwordInputRef.current.value;
	    const confirmPassword = confirmpasswordInputRef.current.value;

	    //validate the form
	    if ( enteredUsername == null || enteredUsername == '' ) {
	        toast("Please enter your username.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    if ( enteredEmail == null || enteredEmail == '' ) {
	    	toast("Please enter your email.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    if ( enteredPassword == null || enteredPassword == '' ) {
	        toast("Please enter your password.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }
	    
	    if ( enteredPassword.trim().length < 7 ) {
	        toast("Password should be of at least 7 characters", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    if ( confirmPassword == null || confirmPassword == '' ) {
	        toast("Please confirm your password", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    if ( confirmPassword != enteredPassword ) {
	        toast("Passwords don't match", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }


	    //if the form passes, try to create user
	    try {
	        const result = await createUser(enteredUsername, enteredEmail, enteredPassword, router, formRef);
	        console.log(result);
	    } catch (error) {
	    	alert(error)
	    }
	}

	return(
		<div className={styles.container}>
			<div className={styles.leftside}>
				<div className={styles.credentials}>
					<h1>Signup</h1>
					<p>Already have an account? Login <Link href='/api/auth/signin' className={styles.links}>here.</Link></p>
					<form className={styles.form} onSubmit={submitHandler} ref={formRef}>
						<input type="text" name="username" placeholder="username" required ref={usernameInputRef} ></input>
						<input type="email" name="email" placeholder="email" required ref={emailInputRef}  ></input>
						<input type="password" name="password" placeholder="password" required ref={passwordInputRef} ></input>
						<input type="password" name="confirmpassword" placeholder="confirm password" required ref={confirmpasswordInputRef} ></input>
						<div className={styles.submit}>
							<button type='submit'>Create account &raquo;</button>	
						</div>	
					</form>
				</div>
			</div>
			<div className={styles.imagecontainer}>
				<Image src='/images/outerspace.svg' alt='outer space' layout='fill' objectFit='contain' />
			</div>
		</div>
	);
};

export default RegisterForm;