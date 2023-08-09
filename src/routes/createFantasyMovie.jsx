import {useContext, useState} from "react";
import {Rating, TextareaAutosize} from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useDbUpdate} from "../hooks/useDbUpdate.js";

import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import AppContext from "../context/appContext.jsx";
import {useGetUserFromSession} from "../hooks/useGetUserFromSession.js";

export default function CreateFantasyMovie () {
    const {user, setUser} = useContext(AppContext)

    useGetUserFromSession(setUser)
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription ] = useState('')
    const [rating, setRating] = useState(0)
    const saveFanastyMovie = useDbUpdate()
    console.log(user)
    function handleSubmit (e) {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        saveFanastyMovie.mutate({table:'fantasyMovies', data:{title:data.get('title'), description:data.get('description'), rating:data.get('rating'),user_id:user.user_id
            }})
        setRating(0)
        setDescription("")
        setTitle("")
        navigate('/discover/fantasymovies')

    }
    return (
        <Container>
            <Box component="form" onSubmit={handleSubmit} sx={{my:10}}>

                    <Typography>Movie Title</Typography>
                    <TextareaAutosize onChange={e=>{setTitle(e.target.value)}}  label="title"  value={title} name="title"  />
                    <Typography>Description</Typography>
                    <TextareaAutosize onChange={e=>{setDescription(e.target.value)}}  label="description"  value={description} name="description"  />
                    <Typography>Rating</Typography>
                    <Rating onChange={e=>{setRating(parseInt(e.target.value))}} label="rating" name="rating" precision={0.5} max={10} value={rating}/>
                    <br/>
                    <Button type="submit" >Create Movie</Button>

            </Box>
        </Container>

    )
}