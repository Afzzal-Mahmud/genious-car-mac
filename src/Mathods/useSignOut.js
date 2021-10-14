import { getAuth, signOut } from "firebase/auth";

function useSignOut() {

    function logOut() { 
        const auth = getAuth()

        signOut(auth)
        .then(()=>{ })
        
    }
    return{logOut}
}

export default useSignOut;