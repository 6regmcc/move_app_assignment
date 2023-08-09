import Cast from "../components/cast.jsx"
import {useLoaderData, useNavigate} from "react-router-dom";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";
import {useContext} from "react";
import AppContext from "../context/appContext.jsx";
import Container from "@mui/material/Container";

export function loader (props){
    return props.params.id
}
export default  function CastPage (props) {
    const movieId = useLoaderData()
    const navigate = useNavigate()
    const {user, setUser} = useContext(AppContext)
    useGetUserFromSession(setUser)

    return (
        <Container>
            <Cast movie={movieId} />
        </Container>
    )
}