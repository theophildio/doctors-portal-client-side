import React from "react";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../SharedPages/Spinner";
const Login = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	let errorLoginMsg;

	if (loading || googleLoading) {
		return <Spinner></Spinner>
	}

	if (error || googleError) {
		errorLoginMsg = <p className="text-red-500 py-2 text-sm text-center">{error?.message || googleError?.message}</p>
	}

	if (user || googleUser) {
		console.log(user || googleUser);
	}

	const onSubmit = (data) => {
		signInWithEmailAndPassword(data.email, data.password);
		navigate('/appointment');
	};

	return (
		<div className="flex h-screen justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-2xl font-bold text-center">Login</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								{...register("email", {
									required: {
										value: true,
										message: "Email is required."
									},
									pattern: {
										value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
										message: "Please provide valid email address",
									},
								})}
								type="email"
								className="input input-bordered w-full max-w-xs"
							/>
							<label className="label">
								{errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
								{errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input {...register("password", {
									required: {
										value: true,
										message: "Password is required."
									},
									minLength: {
										value: 6,
										message: "Password must be 6 characters or longer.",
									},
								})}
								type="password"
								className="input input-bordered w-full max-w-xs"
							/>
							<label className="label">
								{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
								{errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
							</label>
							<label className="label">
								<span className="label-text-alt">Forget Password?</span>
							</label>
						</div>
						{errorLoginMsg}
						<div>
							<input
								type="submit"
								value="Login"
								className="btn w-full max-w-xs"
							/>
							<label className="label justify-center">
								<span className="label-text-alt">
									New to Doctors Portal?{" "}
									<Link to="/signup" className="text-primary">
										Create new account
									</Link>
								</span>
							</label>
						</div>
					</form>
					<div className="divider">OR</div>
					<button onClick={() => signInWithGoogle()} className="btn btn-active">
						CONTINUE WITH GOOGLE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
