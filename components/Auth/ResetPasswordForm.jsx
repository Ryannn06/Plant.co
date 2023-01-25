import {useState, useRef, Fragment, useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";

import axios from 'axios';
import {useParams} from 'react-router-dom';

import styles from '/components/css/Auth/Register.module.css';


async function resetPassword(newpassword, user, token, router, formRef) {
	const response = await fetch(`http://localhost:3001/reset-password/${user}/${token}`, {
    	method: 'POST',
    	body: JSON.stringify({ newpassword }),
    	headers: {
      		'Content-Type': 'application/json',
    	},
 	});

	const data = await response.json();
  	if (!response.ok) {
  		formRef.current.reset();
    	alert(data.message);
  	} else {
  		formRef.current.reset();
  		alert(data.message);
  		router.push('/');
  	}
  	return data;
}

const ForgotPasswordForm = () => {
	//validate access
	const[validUrl, setValidUrl] = useState(false);

	const formRef = useRef();
	const passwordInputRef = useRef();
	const confirmpasswordInputRef = useRef();
	const router = useRouter();

	//verify token and user from the parameters in the url
	const {user, token} = router.query;
	const url = `http://localhost:3001/reset-password/${user}/${token}`
	  
	useEffect(() => {
	    if(!user || !token) {
	      	return;
	    }
	    const verifyUrl = async () => {
	      	try {
	      		//call api for resetting password
	      		await axios.get(url)

	      		//if valid, display reset password form
	      		setValidUrl(true)
	      	} catch (error){
	      		//if not, show 404 not found
	      		setValidUrl(false)
	      	}
	    }
		verifyUrl()
	}, [user, token])

	async function submitHandler(event) {
		//prevent submission of the form
		event.preventDefault();

		const newpassword = passwordInputRef.current.value;
		const confirmpassword = confirmpasswordInputRef.current.value;

		if (newpassword == null || newpassword == ''){
			alert('Please enter your new password.')
			return
		}

		if ( newpassword.trim().length < 7 ) {
		    alert("Password should be of atleast 7 characters.");
		    return
		}

		if (confirmpassword == null || confirmpassword == ''){
			alert('Please confirm your new password.')
			return
		}

		if (newpassword != confirmpassword){
			alert("Passwords don't match!")
			return
		}

		try {
			const result = await resetPassword(newpassword, user, token, router, formRef);
			console.log(result);
		} catch (error) {
			alert(error);
		}
	}

	return(
		<Fragment>
			{validUrl ? (
				<div className={styles.container}>
					<div className={styles.leftside}>
						<div className={styles.credentials}>
							<h1>Reset Password</h1>
							<p>Reset your password here.</p>
							<form className={styles.form} onSubmit={submitHandler} ref={formRef}>
								<input type="password" name="password" placeholder="New password" required ref={passwordInputRef}  ></input>
								<input type="password" name="confirmpassword" placeholder="Confirm password" required ref={confirmpasswordInputRef}  ></input>
								<div className={styles.submit}>
									<button type='submit'>Reset password</button>	
								</div>	
							</form>
						</div>
					</div>
					<div>
					</div>
				</div>
			): (
				<div className={styles.container}>
					<div className={styles.leftside}>
						<div className={styles.credentials}>
							<h1>404 Not Found</h1>
							<p>Oops, It seems like your lost.</p>
							<Link href="/" className={styles.btn404}>Take me Home</Link>
						</div>
					</div>
					<div>
					</div>
				</div>
			)};
		</Fragment>
	);
};

export default ForgotPasswordForm;

export async function getServerSideProps(ctx) {
  const { user } = ctx.query;
  return {
    props: {
      user,
    },
  };
}