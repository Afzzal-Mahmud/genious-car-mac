import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import useEmailAndPassword from "../Mathods/useEmailAndPassword"
import useGoogleSignIn from "../Mathods/useGoogleLogIn";
// import useSignOut from "../Mathods/useSignOut";
import useUser from "./useUser";

initializeAuthentication()

function useFirebase() {
    /* users is a custom hook for setting user */
    const {user,setUser} = useUser()
    const {signInUsingGoogle} = useGoogleSignIn()
    // const {logOut} = useSignOut()
    // const {logInUsingEmail} = useEmailAndPassword()

    const auth = getAuth()

    function logOut() { 
        
        signOut(auth)
        .then(()=>{
            console.log('inside the logOut')
            setUser({})
         })
        
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }
        })
    },[user])

    return {
        user,
        setUser,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;