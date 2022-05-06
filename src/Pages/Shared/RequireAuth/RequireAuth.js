import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // Loading page display
    if (loading) {
        return <Loading></Loading>
    }

    // If no user login redirect to login page
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If email is not verified show the options to verify
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center my-5 p-5'>
            <h3 className='text-red-500 text-4xl font-semibold'>Your Email is not verified..!!</h3>
            <h5 className='text-purple-400 text-2xl my-3'> Please Verify your email address to continue</h5>
            <button className='bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold my-2'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>

        </div>
    }

    return children;
};

export default RequireAuth;