import * as React from 'react';
import Container from "@mui/material/Container";
import {logOut} from "../api/supabaseClient.js";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import UserContext from "../context/userContext.jsx";
import Button from "@mui/material/Button";



export default function Logout () {
    const {user, setUser} = useContext(UserContext)

    function handleClick (e) {

    }
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
            <Button
                onClick={handleClick}
            >hello

            </Button>
        </Container>
    )
}