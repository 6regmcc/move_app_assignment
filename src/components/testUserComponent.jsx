import {useContext} from "react";
import UserContext from "../context/userContext.jsx";

export default function TestUserComponent (props) {
    const {user} = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <h2>hello {user?.first_name ? user.first_name : 'logged out'}</h2>
            <p>{user?.first_name}</p>
        </div>
    )
}