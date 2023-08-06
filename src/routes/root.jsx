import HeaderAppBar from "../components/headerAppBar.jsx"
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import FilterDrawer from "../components/filterDrawer.jsx";
import {UserProvider} from "../context/userContext.jsx";
import {useState} from "react";

function Root () {
    const [count, setCount] = useState(0);
    return (
        <div>
            <HeaderAppBar />
            <FilterDrawer />
            <Outlet context={[count, setCount]} />
        </div>

    )
}

export default Root
