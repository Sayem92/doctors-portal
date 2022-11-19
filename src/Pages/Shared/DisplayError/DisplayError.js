import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();



    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='p-4 grid gap-4 place-items-center h-72  '>
            <div className='space-y-3'>
                <p className='text-3xl text-red-500'>Something went wrong!!!</p>

                <p className='text-3xl text-yellow-500'>
                    {error?.status} {error?.statusText}
                </p>

                <h2 className='text-3xl'>Please
                    <button onClick={handleLogout}
                        className='btn btn-info btn-sm mx-2'
                    >Sign Out</button>
                    and log back in</h2>
            </div>
        </div>
    );
};

export default DisplayError;