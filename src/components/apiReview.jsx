import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ReviewRating from "./reviewsRating.jsx";
import AccordionDetails from "@mui/material/AccordionDetails";
import parse from "html-react-parser";
import Box from "@mui/material/Box";
import * as React from "react";


export default function ApiReview (props) {
    return (
        <Box>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"

                    >
                        <Grid
                            sx={{mx: 3}}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                        >
                            <Typography>{props.review.author_details.name}</Typography>

                            <ReviewRating review={props.review.author_details.rating} />
                        </Grid>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {parse(props.review.content)}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    )
}