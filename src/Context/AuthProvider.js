import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';
import { current } from 'daisyui/src/colors';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // create user----
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // login------
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    // logout-----------
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user observing');
            setUser(currentUser)
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        signIn,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;