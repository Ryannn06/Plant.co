import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {useState, useRef} from "react";
import { useRouter } from "next/router";
import { getProviders, getSession, signIn, getCsrfToken } from "next-auth/react";
import { toast } from "react-toastify";

import styles from '/components/css/Auth/Signin.module.css';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';


async function validateUser(username, password, router, formRef) {
	const response = await signIn('credentials', {
	    redirect: false,
	    username: username,
	    password: password,
	}).then(response => {
		console.log(response)
		if (!response.ok) {
			formRef.current.reset();
			toast(response.error, { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
		} else {
			formRef.current.reset();
			router.push('/Dashboard')
		}
	});
}

async function googleHandler(){
	signIn('google', {
		callbackUrl: "http://localhost:3000/Dashboard"
	})
}

async function githubHandler(){
	signIn('github', {
		callbackUrl: "http://localhost:3000/Dashboard"
	})
}

export default function SignIn({ providers, csrfToken }) {
	const router = useRouter();
	const formRef = useRef();
	const usernameInputRef = useRef();
	const passwordInputRef = useRef();

	//handle the form
	async function submitHandler(event) {
		//prevent submission
	    event.preventDefault();

	    const enteredUsername = usernameInputRef.current.value;
	    const enteredPassword = passwordInputRef.current.value;

	    //validate the form
	    if ( enteredUsername == null || enteredUsername == '' ) {
	        toast("Please enter your username.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    if ( enteredPassword == null || enteredPassword == '' ) {
	        toast("Please enter your password.", { hideProgressBar: true, autoClose: 5000, type: 'error', position:'top-center' });
	        return
	    }

	    try {
	        const result = await validateUser(enteredUsername, enteredPassword, router, formRef);
	        console.log(result);
	    } catch (error) {
	    	toast(error, { hideProgressBar: true, autoClose: 9000, type: 'error', position:'top-center' });
	    }
	}

  	return (
	    <div>	
	    	<Head>
				<title>Plant.co</title>
			</Head>
			<div>
				<Navbar/>
				<div className={styles.container}>
					<div className={styles.leftside}>
						<div className={styles.credentials}>
							<h1>Login</h1>
							<p>Don't have an account? Register <Link href='/Register' className={styles.links}>here.</Link></p>
							<form className={styles.form} onSubmit={submitHandler} ref={formRef}>
								<input type="text" id="password" name="username" placeholder="username" required ref={usernameInputRef}></input>
								<input type="password" id="password" name="password" placeholder="password" required ref={passwordInputRef}></input>
								<Link href="/ForgotPassword" className="styles.forgotlink">Forgot password?</Link>
								<div className={styles.submit}>
									<button type='submit'>Login &raquo;</button>	
								</div>	
							</form>
						</div>
						<div className={styles.providers}>
							<p>Or</p>
							<div className={styles.providersbtn}>
								<button onClick={googleHandler}>
									<span className={styles.texticon}>
										Sign in with Google
										<img src='/images/google.png' />
									</span>
								</button>
								<button onClick={githubHandler}>
									<span className={styles.texticon}>
										Sign in with Github
										<img src='/images/github.png' />
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className={styles.imagecontainer}>
						<Image src='/images/wishes.svg' alt='outer space' layout='fill' objectFit='contain' />
					</div>
				</div>
				<Footer />
			</div>
	    </div>
	)
}

export async function getServerSideProps(context) {
	const { req } = context;
 	const session = await getSession({ req });

  	if (session) {
    	return {
      		redirect: { destination: "/" },
    	};
  	}
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	}
}