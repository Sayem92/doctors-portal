import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { UseToken } from '../Hooks/UseToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const { signIn, googleLogin, forgetPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState(null);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = UseToken(loginUserEmail);


    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();


    if (token) {
        navigate(from, { replace: true })
    }

    // user login-------------------
    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                toast.success('Login Successfully!');
                // set for user token------------- 
                setLoginUserEmail(data.email);

            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
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


    // password reset-----------------
    const handlePasswordReset = () => {
        if (email === null) {
            return toast('Please enter your email');
        }
        forgetPassword(email)
            .then(() => {
                toast.success('Please check your email for reset password');
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl mx-2'>
                <h2 className='text-4xl py-4 text-center text-green-500 font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            onBlur={() => {
                                const emailValue = getValues('email');
                                setEmail(emailValue);
                            }}
                            className="input input-bordered w-full max-w-xs" placeholder="Your email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder="********" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span onClick={handlePasswordReset}
                                className="label-text  hover:underline">Forget Password?</span>
                        </label>
                    </div>

                    <input className='btn btn-accent text-white w-full' type="submit" value='Login' />
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='my-2 '>New to Doctors Portal? <Link to='/signup' className='text-primary underline'>Create an account</Link></p>
                <div className='divider  py-4 '>OR</div>
                <button onClick={handleGoogleLogin}
                    className='btn btn-outline w-full  hover:text-white hover:border-none  hover:bg-blue-500'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;