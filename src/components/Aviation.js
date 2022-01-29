import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material"
import flying from "../images/pilot_flying.jpg";
import ground from "../images/pilot_ground.jpg";
import Header from "./Header";
import BoldWord from "./BoldWord";
import { Box } from "@mui/system";

const Aviation = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{minHeight: 'calc(100vh - 80px)'}}>
            <Grid item xs='auto' p={2}>
                <Header text="3. Aviation"/>
                <Grid container direction="row" justifyContent="center" alignItems="stretch">
                    <Box p={1}>
                        <Card sx={{maxWidth: 300, height: 1}}>
                            <CardMedia component="img" image={flying} alt="tim flying"/>
                            <CardContent>
                                <Typography variant="body1">
                                    Another passion of mine is Aviation! I began my journey in the busy airspace near Toronto at the age of 15 with a discovery flight, and have not stopped since. 
                                    I then went on to fly a plane solo before I could ever drive alone. After high school, I continued my flight training in Edmonton while attending university.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box p={1}>
                        <Card sx={{maxWidth: 300}}>
                            <CardMedia component="img" image={ground} alt="tim flight test"/>
                            <CardContent>
                                <Typography variant="body1">
                                    Fast forward to today, and I am proud to have my <BoldWord word="Private Pilot License"/> since November 2021 and have over 100 hours of experience. I am currently working on my night rating and building time for my Commercial Pilot License.
                                    I am also excited to be participating in a 50-hour professional seaplane pilot course in the summer of 2022, where I hope to learn and sharpen my skills in the challenging terrain of the west coast.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Aviation