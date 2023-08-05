import * as React from 'react';
import Container from "@mui/material/Container";
import {logOut} from "../api/supabaseClient.js";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";



export default function Logout () {
    const navigate = useNavigate()
    function handleLogout () {
        logOut().then(()=> navigate("/"))
    }


    return (
        <Container>
            <Link component="button"
                  onClick={handleLogout}
            >
                Logout
            </Link>
        </Container>
    )
}