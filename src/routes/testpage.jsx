import {useContext} from "react";
import Container from "@mui/material/Container";
import {logOut, supabase} from "../api/supabaseClient.js";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useGetReviewDbData} from "../hooks/useGetReviewDbData.js"

import AppContext from "../context/appContext.jsx";
import { useOutletContext } from "react-router-dom";
import TestUserComponent from "../components/testUserComponent.jsx";
import {useEffect} from "react";
import {useNavigation} from "react-router-dom";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";

import Cast from "../components/cast.jsx"
export default  function TestPage () {
    const navigate = useNavigate()
    const {user, setUser} = useContext(AppContext)
    useGetUserFromSession(setUser)

    return (
        <Container>
            <Cast movie={346698} />
        </Container>
    )
}