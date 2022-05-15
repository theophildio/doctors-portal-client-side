import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

	if (user) {
		console.log(user);
	}
  return (
    <div className="flex h-screen justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-2xl font-bold text-center capitalize">Sign up</h2>
					<form className="mt-5">
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								className="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								className="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								className="input input-bordered w-full max-w-xs"
							/>
							<label className="label">
								<span className="label-text-alt">Forget Password?</span>
							</label>
						</div>
						<div>
							<input type="submit" value="Login" className="btn w-full max-w-xs" />
							<label className="label justify-center">
								<span className="label-text-alt">Already have account? <Link to="/login" className="text-primary">Login</Link></span> 
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