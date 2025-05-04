import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);

    console.log(user);
    // create user email and password
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // user information update
    const updateUserInformation = (userData)=>{
        return updateProfile(auth.currentUser,userData);
    }

    // login with google
    const createUserGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    // login with email and password
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Observer Current userInformation
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
        })

       return ()=> unsubscribe();
    },[])

    const userInfo ={
        user,
        createUser,
        loginUser,
        createUserGoogle,
        updateUserInformation
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;