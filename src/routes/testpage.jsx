import {useContext} from "react";
import Container from "@mui/material/Container";
import {logOut, supabase} from "../api/supabaseClient.js";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useGetReviewDbData} from "../hooks/useGetReviewDbData.js"

import UserContext from "../context/userContext.jsx";
import { useOutletContext } from "react-router-dom";
import TestUserComponent from "../components/testUserComponent.jsx";
import {useEffect} from "react";
import {useNavigation} from "react-router-dom";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";

export default  function TestPage () {
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    useGetUserFromSession(setUser, navigate)

    return (
        <Container>
            <TestUserComponent/>
        </Container>
    )
}