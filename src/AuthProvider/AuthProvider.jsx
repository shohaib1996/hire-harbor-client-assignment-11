import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types'; 
import axios from "axios";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUser = (displayName, photoURL) => {
        setLoading(true)
        if(user){
            return updateProfile(auth.currentUser,  {
                displayName,
                photoURL
              })
        }
    }
    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
           if(currentUser){
            axios.post("https://hire-harbor-server.vercel.app/jwt", user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .then(error => {
                        console.error(error);
                    })
            
           }
        })
        return () => {
            unSubscribe()
        }

    }, [user])


    const authInfo = {
        user, createUser, signInUser, signInWithGoogle, loading, logOut, updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;