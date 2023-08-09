import {createContext, useState} from "react";

const AppContext = createContext(null);

export const UserProvider = (props) => {
    const [user, setUser] = useState(null)
    const [type, setType] = useState(null)

    return(
        <AppContext.Provider value={{user, setUser, type, setType}}>
            { props.children }
        </AppContext.Provider>

    )
}

export default AppContext