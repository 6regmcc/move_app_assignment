import HeaderAppBar from "../components/headerAppBar.jsx"
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import FilterDrawer from "../components/filterDrawer.jsx";


function Root () {
    return (
        <Box>

            <HeaderAppBar />
            <FilterDrawer />
            <Outlet />
        </Box>

    )
}

export default Root
