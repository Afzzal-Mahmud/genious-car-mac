import { useState } from "react";

function useUsers() {
    const [users,setUsers] = useState({})
    return {users,setUsers}
}
export default useUsers;