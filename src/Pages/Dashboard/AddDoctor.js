import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../SharedPages/Spinner";

const AddDoctor = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();

	const {data: services, isLoading} = useQuery('services', () => fetch('https://ancient-escarpment-91645.herokuapp.com/service').then(res => res.json()))

	const imgStorageKey = '178176aaaa274d2b6409cb0a2dda70b2';

	const onSubmit = async data => {
		const image = data.image[0];
		const formData = new FormData();
		formData.append('image', image);
		const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
		fetch(url, {
			method: 'POST',
			body: formData
		})
		.then(res => res.json())
		.then(result => {
			if(result.success) {
				const img = result.data.url;
				const doctor = {
					name: data.name,
					email: data.email,
					specialty: data.specialty,
					img: img
				}
				// Send to db
				fetch('https://ancient-escarpment-91645.herokuapp.com/doctor', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${localStorage.getItem('accessToken')}`
					},
					body: JSON.stringify(doctor)
				})
				.then(res => res.json())
				.then(inserted => {
					if(inserted.insertedId) {
						toast.success('Successfully added a Doctor!');
						reset();
					}
					else {
						toast.error('Failed to add Doctor!');
					}
				})
			}
			
		})
	}
	
	if (isLoading) {
		return <Spinner />
	}

	return (
		<div>
			<h2 className="text-2xl my-5">Add Doctors</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="w-1/2 pl-5">
				<div className="form-control w-full">
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
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.name?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.name.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<input
						{...register("email", {
							required: {
								value: true,
								message: "Email is required.",
							},
						})}
						type="email"
						placeholder="Email"
						className="mb-5 input input-bordered w-full"
					/>
					<label className="label">
						{errors.email?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.email.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label" htmlFor="specialty">
						Specialty
					</label>
					<select
						{...register("specialty")}
						className="select select-bordered w-full mb-5"
					>
						{
							services.map(service => 
								<option key={service._id} value={service.name}>{service.name}</option>
								)
						}	
					</select>
				</div>
				<label className="label" htmlFor="image">
					Upload image
				</label>
				<div className="form-control w-full">
					<input
						{...register("image", {
							required: {
								value: true,
								message: "Image is required.",
							},
						})}
						type="file"
						className="mb-5 input w-full"
					/>
					<label className="label">
						{errors.image?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.image.message}
							</span>
						)}
					</label>
				</div>
				<input
					type="submit"
					value="Add Now"
					className="input bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered"
				/>
			</form>
		</div>
	);
};

export default AddDoctor;
