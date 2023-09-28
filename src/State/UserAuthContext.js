import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPhoneNumber ,RecaptchaVerifier, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
function logOut(){
    return signOut(auth)
}

function googleSignIn(){
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
}

function setupRecaptcha (number,auth){
    const recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {},
        auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber( number, recaptchaVerifier)
}
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(user)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserAuthContext.Provider value={{ user,setupRecaptcha,googleSignIn, signUp, logIn, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserAuthContext)
}
