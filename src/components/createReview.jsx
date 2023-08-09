import {Rating, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AccordionDetails from "@mui/material/AccordionDetails";

import * as React from "react";
import {TextareaAutosize} from "@mui/material";
import {useDbUpdate} from "../hooks/useDbUpdate.js";
import {useContext} from "react";
import UserContext from "../context/userContext.jsx";


export default function CreateReview(props){
    const {user} = useContext(UserContext)
    const saveReviewToDb = useDbUpdate()
    function handleSubmit (e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        saveReviewToDb.mutate({table:'reviewsTable', data:{frist_name: user.first_name, user_id: user.user_id, item_id:props.movie.id, review:data.get('review'),rating:data.get('rating'), type:props.type}})
    }
    return(
        <Box component="form" onSubmit={handleSubmit}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Create Review</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                    >

                        <TextareaAutosize style={{ width: "60%" }} label="Review"  name="review" minRows={6} />
                        <Rating label="Rating" name="rating" precision={0.5} max={10} />

                    </Grid>
                    <Button type="submit" sx={{py:2, m:2}}>Create Review</Button>
                </AccordionDetails>
            </Accordion>

        </Box>


    )
}