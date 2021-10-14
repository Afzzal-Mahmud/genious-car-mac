import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUsers from "../Hooks/useUser";

function useGoogleSignIn() {
    /* custom users hook and useGoogle sign In use on useFirebase */
    const {users,setUsers} = useUsers()
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    function signInUsingGoogle() {
      signInWithPopup(auth,googleProvider)
      .then(result => {
          console.log(result.user)
          setUsers(result.user)
      })  
    }
    return {signInUsingGoogle}
}
export default useGoogleSignIn;