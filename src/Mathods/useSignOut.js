import { getAuth, signOut } from "firebase/auth";
import useUser from "../Hooks/useUser";

function useSignOut() {
    const {setUser} = useUser()
    function logOut() { 
        const auth = getAuth()

        signOut(auth)
        .then(()=>{
            console.log('inside the logOut')
            setUser({})
         })
        
    }
    return{logOut}
}

export default useSignOut;