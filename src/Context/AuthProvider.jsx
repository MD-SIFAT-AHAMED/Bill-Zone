import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    // const [refresh,setRefresh]=useState(false);

    console.log(user);
    // create user email and password
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // user information update
    const updateUserInformation = (userData)=>{
        setLoading(true);
        // setRefresh((prev)=>(!prev));
        return updateProfile(auth.currentUser,userData);
    }

    // login with google
    const createUserGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    // login with email and password
    const loginUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Observer Current userInformation
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false);
        })

       return ()=> unsubscribe();
    },[])
    // refresh
    
    // Forgot Password
    const userPasswordForgot=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    // Sign Out user
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const userInfo ={
        user,
        loading,
        createUser,
        loginUser,
        signOutUser,
        createUserGoogle,
        userPasswordForgot,
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