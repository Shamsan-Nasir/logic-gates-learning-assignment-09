import React, { createContext, useEffect, useState } from 'react'
import { auth, googleProvider } from './firebase.init'
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router'


export const AuthContext = createContext(null)




export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState()
    let [loading, setLoading] = useState(true)

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signIn(email, password) {

        return signInWithEmailAndPassword(auth, email, password)

    }
    function SignOut() {
        return signOut(auth)
    }
    function signInWithGoogle() {
        return signInWithPopup(auth, googleProvider)
    }
    function UpdateProfile(name, photo) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo

        })
    }

    function DeleteAccount() {
       return deleteUser(auth.currentUser)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })

        return unsubscribe
    }, [])



    let authInfo = {
        user,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        SignOut,
        UpdateProfile,
        DeleteAccount

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    )
}
