import initializeAuthentication from "../Firebase/firebase.init";
import useGoogleSignIn from "../Mathods/useGoogleLogIn";
import useUsers from "./useUser";

initializeAuthentication()

function useFirebase() {
    /* this user is a custom hook for setting user */
    const {users,setUsers} = useUsers()
    const {signInUsingGoogle} = useGoogleSignIn()
    const {logOut} = useSignOut()

    return {
        users,
        setUsers,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;