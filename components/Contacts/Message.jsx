import styles from '/components/css/Contacts/Message.module.css';
import { useForm } from "react-hook-form";

const Message = () => {
	const {
	  register,
	  handleSubmit,
	  formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
	  console.log(data);
	};

	return(
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<p>You may leave us a message here and we will respond to your email address the
				soonest posible. Have a planty greeny day!</p>
				<div className={styles.name}>
					<input type="text" id="fname" placeholder="Enter First Name" {...register("fname")}></input>
					<input type="text" id="lname" placeholder="Enter Last Name" {...register("lname")}></input>
				</div>
				<input type="email" id="email" placeholder="Email Address" {...register("email")} />
				<input type="text" id="subject" placeholder="Enter subject" {...register("subject")} />
				<textarea type="text" id="message" placeholder="Enter message" {...register("message")}></textarea>
				<div className={styles.submit}>
					<button type='submit'>Submit a message</button>	
				</div>	
			</form>
		</div>
	);
};

export default Message;