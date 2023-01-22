import {useState, useRef} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";

import styles from '/components/css/Auth/Register.module.css';

async function createUser(username, email, password, router) {
 	const response = await fetch('http://localhost:3001/register', {
    	method: 'POST',
    	body: JSON.stringify({ username, email, password }),
    	headers: {
      		'Content-Type': 'application/json',
    	},
 	});

 	const data = await response.json();

  	if (!response.ok) {
    	alert(data.message);
  	} else {
  		alert(data.message);
  		router.push('/api/auth/signin')
  	}
  	return data;
}

const RegisterForm = () => {

	//get the data from the form
	const usernameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const router = useRouter();

	//handle the form
	async function submitHandler(event) {

		//prevent submission
	    event.preventDefault();

	    const enteredUsername = usernameInputRef.current.value;
	    const enteredEmail = emailInputRef.current.value;
	    const enteredPassword = passwordInputRef.current.value;

	    //validate the form
	    if ( enteredUsername == null || enteredUsername == '' ) {
	        alert("Please enter your username.");
	        return
	    }

	    if ( enteredEmail == null || enteredEmail == '' ) {
	        alert("Please enter your email.");
	        return
	    }

	    if ( enteredPassword == null || enteredPassword == '' ) {
	        alert("Please enter your password.");
	        return
	    } else {
	    	if ( enteredPassword.trim().length < 7 ) {
	    	    alert("Password should be of atleast 7 characters.");
	    	    return
	    	}
	    }


	    //if the form passes, try to create user
	    try {
	        const result = await createUser(enteredUsername, enteredEmail, enteredPassword, router);
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
					<form className={styles.form} onSubmit={submitHandler}>
						<input type="text" name="username" placeholder="username" required ref={usernameInputRef} ></input>
						<input type="email" name="email" placeholder="email" required ref={emailInputRef}  ></input>
						<input type="password" name="password" placeholder="password" required ref={passwordInputRef} ></input>
						<div className={styles.submit}>
							<button type='submit'>Create account</button>	
						</div>	
					</form>
				</div>
			</div>
			<div>
				
			</div>
		</div>
	);
};

export default RegisterForm;