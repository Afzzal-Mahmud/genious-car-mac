import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useUsers from "../Hooks/useUser";

function useEmailAndPassword() {

    const {users,setUsers} = useUsers()

    function logInUsingEmail(email,password) {
     const auth = getAuth()
     createUserWithEmailAndPassword(auth,email,password)
     .then(result => {
         setUsers(result.user)
         console.log(result.user)
     })  
    }
    return logInUsingEmail 
}
export default useEmailAndPassword;