import React from 'react';

const ButtonPrimary = ({children}) => {
    return (
        <button
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">{children}</button>
    );
};

export default ButtonPrimary;