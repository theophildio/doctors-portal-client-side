import React from "react";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useToken from "../../../hooks/useToken";
import Spinner from "../../SharedPages/Spinner";

const SignUp = () => {
	const [signInWithGoogle, googleUser, googleLoading, googleError] =
		useSignInWithGoogle(auth);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updateError] = useUpdateProfile(auth);  
	const [token] = useToken(user || googleUser);
  const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/appointment";
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	let errorSignupMsg;

	if (loading || googleLoading) {
		return <Spinner></Spinner>;
	}

	if (error || googleError || updateError) {
		errorSignupMsg = (
			<p className="text-red-500 py-2 text-sm text-center">
				{error?.message || googleError?.message || updateError?.message}
			</p>
		);
	}

	if (token) {
		navigate(from, { replace: true });
	}

	const onSubmit = async (data) => {
		await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate('/appointment');
	};

	return (
		<div className="flex h-screen justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-2xl font-bold text-center capitalize">Sign up</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								{...register("name", {
									required: {
										value: true,
										message: "Name is required.",
									},
								})}
								type="text"
								className="input input-bordered w-full max-w-xs"
							/>
							<label className="label">
								{errors.name?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.name.message}
									</span>
								)}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								{...register("email", {
									required: {
										value: true,
										message: "Email is required.",
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
								{errors.email?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
								{errors.email?.type === "pattern" && (
									<span className="label-text-alt text-red-500">
										{errors.email.message}
									</span>
								)}
							</label>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								{...register("password", {
									required: {
										value: true,
										message: "Password is required.",
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
								{errors.password?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
							</label>
							<label className="label">
								<span className="label-text-alt">Forget Password?</span>
							</label>
						</div>
						{errorSignupMsg}
						<div>
							<input
								type="submit"
								value="Sign up"
								className="btn w-full max-w-xs"
							/>
							<label className="label justify-center">
								<span className="label-text-alt">
									Already have an account?{" "}
									<Link to="/login" className="text-primary">
										Login
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

export default SignUp;
