import HeaderAppBar from "../components/headerAppBar.jsx"
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import FilterDrawer from "../components/filterDrawer.jsx";
import {UserProvider} from "../context/appContext.jsx";
import {useState} from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


function Root () {

    const [count, setCount] = useState(0);
    return (
        <div>
            <HeaderAppBar />
            <FilterDrawer />
            <Outlet context={[count, setCount]} />
            <Typography sx={{mt:6}}>Login or Signup to Continue</Typography>
            <br/>
            <Link href="/login">Login</Link>
            <br/>
            <Link href='/signup'>Signup</Link>
        </div>

    )
}

export default Root
