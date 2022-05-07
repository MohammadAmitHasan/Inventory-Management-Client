import React, { useRef } from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading'
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    window.scrollTo(0, 0);

    const refEmail = useRef('');
    const refName = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');

    const [login, setLogin] = useState(true);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        createUserWithEmailAndPassword,
        signupUser,
        signupLoading,
        signupError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile] = useUpdateProfile(auth);

    const [sendPasswordResetEmail, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    if (user || googleUser || githubUser || signupUser) {
        navigate(from, { replace: true });
    }

    let errorInfo;
    if (error || signupError || googleError || githubError || resetError) {
        errorInfo = '';
        errorInfo = <p className='p-4 rounded bg-red-500 my-2'>
            {error?.message} {googleError?.message} {githubError?.message} {signupError?.message} {resetError?.message}
        </p>
    }

    if (googleLoading || loading || githubLoading || signupLoading) {
        return <Loading></Loading>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = refEmail.current.value;
        const password = refPassword.current.value;

        if (login) {
            await signInWithEmailAndPassword(email, password);
            const { data } = await axios.post('http://localhost:5000/login', {
                email
            })
            localStorage.setItem('access_token', data.token)
        }
        else {
            const displayName = refName.current.value;
            const confirmPassword = refConfirmPassword.current.value;
            if (password === confirmPassword) {
                await createUserWithEmailAndPassword(email, password);
                await updateProfile({ displayName })
            }
            else {
                toast('The Passwords did not match')
            }
        }
    }

    const handleResetPassword = async (e) => {
        const email = refEmail.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('An email is sent to reset your password.');
        }
        else {
            toast('Please enter your email address and try again');
        }
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }

    return (
        <div className='container mx-auto mb-10 p-5'>

            <div className='mx-auto mt-3 max-w-md text-center shadow-lg shadow-purple-500 p-5 rounded-xl'>
                <h2 className='text-red-400 text-4xl font-semibold text-center mb-4'>
                    {login ? 'Login' : 'Sign Up'}
                </h2>

                {errorInfo}

                <form onSubmit={handleSubmit}>

                    {
                        login ? '' :
                            <input ref={refName} type="text" name='name' className='bg-purple-100 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Your Full Name' required />
                    }

                    <input ref={refEmail} type="email" name="email" id="email" className='bg-purple-100 w-full p-3 focus:outline-red-300 text-gray-900 my-2 rounded-md' placeholder='Email Address' required />

                    <input ref={refPassword} type="password" name="password" id="password" className='bg-purple-100 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Enter Password' required />

                    {
                        login ? '' : <input ref={refConfirmPassword} type="password" name="confirmPassword" id="confirmPassword" className='bg-purple-100 w-full p-3 focus:outline-red-300 text-gray-800 my-2 rounded-md' placeholder='Confirm Password' required />
                    }

                    <button type="submit" className='w-3/5 p-3 rounded-full bg-red-600 hover:bg-red-700 text-white my-3'>
                        {
                            login ? 'Login' : 'Sign Up'
                        }
                    </button>

                </form>

                <p className='mt-3 text-lg'>
                    {login ? "Don't have an account.?" : "Already Have an account.?"}

                    <button onClick={() => setLogin(!login)} className='text-red-400 ml-1.5 font-semibold'>
                        {login ? "Sign Up" : "Login"}
                    </button>
                </p>
                {
                    login ?
                        <p className='mt-3 text-lg'>
                            <button onClick={handleResetPassword} className='text-red-400 font-semibold'>
                                Forgot Password.?
                            </button>
                        </p>
                        : ''
                }

                <div className='grid grid-cols-7 mb-3 mt-5 items-center'>
                    <div className='bg-white h-0.5 col-span-3'></div>
                    <span className='font-semibold'>OR</span>
                    <div className='bg-white h-0.5 col-span-3'></div>
                </div>

                <div>
                    <button onClick={handleGoogleSignIn} className='w-full bg-gray-300 flex items-center justify-center mb-3 border-2 my-2 rounded-full h-12 text-black font-semibold'>
                        <span className='mr-1'><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></span>
                        Continue With Google</button>

                    <button onClick={handleGithubSignIn} className='flex items-center justify-center w-full bg-zinc-700 my-2 text-white rounded-full h-12 '>
                        <span className='mr-1'>
                            <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                        </span>
                        Continue With Github</button>
                </div>

            </div>
        </div>
    );
};

export default Login;