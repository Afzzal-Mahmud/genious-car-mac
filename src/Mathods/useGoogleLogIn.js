import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useUser from "../Hooks/useUser";

function useGoogleSignIn() {
    /* custom users hook and useGoogle sign In use on useFirebase */
    const {user,setUser} = useUser()
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    function signInUsingGoogle() {
      signInWithPopup(auth,googleProvider)
      .then(result => {
          console.log(result.user)
          setUser(result.user)
      })  
    }
    return {signInUsingGoogle}
}
export default useGoogleSignIn;