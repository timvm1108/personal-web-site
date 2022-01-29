import React from "react";
import about_photo from "../images/about_headshot.jpg";
import { Grid, Typography, Box, Paper } from "@mui/material";
import BoldWord from "./BoldWord";
import Header from "./Header";

const About = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{minHeight: 'calc(100vh - 80px)'}}>
            <Grid item xs='auto' p={2}>
                <Header text="1. About"/>
                <Typography variant="body1" sx={{ maxWidth: 'sm'}}>
                    Thank you for taking a moment to visit this website! I started out developing software almost a decade ago, learning to create games in GameMaker. As it stands now, that same passion still drives me, but the projects have only gotten bigger. 
                    In my time at University, I have had the opportunity to learn about a wide variety of topics, 
                    such as <BoldWord word="machine learning"/>, <BoldWord word="reinforcement learning"/>, <BoldWord word="database design"/>, <BoldWord word="software practice"/>, <BoldWord word="Android development"/>, and <BoldWord word="web development"/>. 
                    <br/><br/>Although lately, I have been working hard contributing to services used by millions of Albertans to safely access numerous Government services.
                </Typography>
            </Grid>
            <Box pt={2}/>
            <Paper elevation={16} component="img" alt="about photo" src={about_photo} sx={{ width: '50%', height: 'auto', maxWidth: 300}}/>
        </Grid>
    )
}

export default About