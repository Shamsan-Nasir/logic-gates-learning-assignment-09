import React, { createContext, useEffect, useState } from 'react'
import { auth } from './firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


export const AuthContext = createContext(null)



export const AuthProvider = ({ children }) => {
    let [user, setUser] = useState()

    function signUp(email, password) {


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                console.log(userCredential)
                console.log(userCredential.user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    function signIn(email, password) {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
         console.log(currentUser)   
        })

        return unsubscribe
    },[])

    let authInfo = {
        user,
        signUp,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    )
}
