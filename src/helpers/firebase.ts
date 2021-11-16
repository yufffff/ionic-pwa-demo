import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig"

initializeApp(firebaseConfig);

const auth = getAuth();
export default auth;
export const authenticateGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

export const isAuth = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user || null);
        });
    });
};