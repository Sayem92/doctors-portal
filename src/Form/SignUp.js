import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { UseToken } from '../Hooks/UseToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');

    const [token] = UseToken(createUserEmail);// call custom hook for token
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    // user signup---------
    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignUpError('');
                toast.success('Successfully created!');

                //user update---------
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // user save--------
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => {
                console.log(err);
                setSignUpError(err.message);
            })
    };



    // google login----------------
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google Login Successfully!');
            })
            .catch(err => console.log(err))
    }

    //save user --------
    const saveUser = (name, email) => {
        const user = { name, email }

        fetch(`https://doctors-portal-server-sayem92.vercel.app/users`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);
                toast.success('Save user data!');
                setCreateUserEmail(email); // set for token-----

            })

    };



    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl mx-2'>
                <h2 className='text-4xl py-4 font-bold text-center text-green-500'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Name</span>
                        </label>
                        <input type="text" {...register('name', {
                            required: "Please enter your name"
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your name" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email" {...register('email', {
                            required: 'Email is required'
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your email" />

                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Password</span>
                        </label>
                        <input type="password" {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 6, message: "Password is must be 6 characters or longer" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" }

                        })} className="input input-bordered  w-full max-w-xs" placeholder="********" />

                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>


                    <input className='mt-3 btn btn-accent text-white w-full max-w-xs' type="submit" value='Sign Up' />
                    <div>
                        {
                            signUpError && <p className='text-red-600'>{signUpError}</p>
                        }
                    </div>
                </form>

                <p className='my-3 text-center '>Already have an account? <Link to='/login' className='text-primary underline'>Please login</Link></p>
                <div className='divider  py-4 '>OR</div>

                <button onClick={handleGoogleLogin}
                    className='btn btn-outline w-full  hover:text-white hover:border-none hover:bg-blue-500'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;