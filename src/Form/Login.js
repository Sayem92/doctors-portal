import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data);

    }


    return (
        <div className='h-[800px] flex justify-center items-center text-black'>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-4xl text-center text-green-500'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text text-black">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered border-black w-full max-w-xs" placeholder="Your email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text text-black">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered border-black w-full max-w-xs" placeholder="********" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label"> <span className="label-text text-black">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-accent text-white w-full' type="submit" value='Login' />
                </form>
                <p className='my-2 text-black'>New to Doctors Portal? <Link to='/signup' className='text-primary underline'>Create an account</Link></p>
                <div className='divider text-black py-4 '>OR</div>
                <button className='btn btn-outline w-full text-black hover:text-white border hover:bg-blue-500'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;