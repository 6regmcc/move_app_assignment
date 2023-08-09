import {useContext} from "react";
import AppContext from "../context/appContext.jsx";

export default function TestUserComponent (props) {
    const {user} = useContext(AppContext)
    console.log(user)
    return (
        <div>
            <h2>hello {user?.first_name ? user.first_name : 'logged out'}</h2>
            <p>{user?.first_name}</p>
        </div>
    )
}