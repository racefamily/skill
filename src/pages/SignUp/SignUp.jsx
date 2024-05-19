import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const db = getFirestore();
    const auth = getAuth();

    const onSubmit = async data => {
        console.log(data);
        try {
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log(loggedUser);
            await updateUserProfile(data.name, data.photoURL);

            // Save user data to Firestore
            await setDoc(doc(db, "users", loggedUser.uid), {
                name: data.name,
                email: data.email,
                mobile: data.mobile,
                dob: data.dob,
                coordinator: data.coordinator,
                uid: loggedUser.uid
            });

            console.log('User profile info updated and data saved to Firestore');
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/');
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error occurred during sign up.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const handleForgotPassword = async () => {
        const { value: email } = await Swal.fire({
            title: 'Enter your email address',
            input: 'email',
            inputPlaceholder: 'Enter your email address',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
        });

        if (email) {
            try {
                await sendPasswordResetEmail(auth, email);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Password reset email sent!',
                    showConfirmButton: false,
                    timer: 1500
                });
            } catch (error) {
                console.error('Error sending password reset email:', error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error sending password reset email',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile No</span>
                                </label>
                                <input type="text"  {...register("mobile", { required: true })} name="mobile" placeholder="Mobile No" className="input input-bordered" />
                                {errors.mobile && <span className="text-red-600">Mobile No is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover" onClick={handleForgotPassword}>Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date Of Birth</span>
                                </label>
                                <input type="date" {...register("dob", { required: true })} name="dob" className="input input-bordered" />
                                {errors.dob && <span className="text-red-600">Date Of Birth is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Coordinator Name</span>
                                </label>
                                <input type="text" {...register("coordinator", { required: true })} name="coordinator" placeholder="Coordinator Name" className="input input-bordered" />
                                {errors.coordinator && <span className="text-red-600">Coordinator Name is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;