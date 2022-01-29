import React from "react";
import { Grid, Typography } from "@mui/material";

const Home = () => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{minHeight: 'calc(100vh - 80px)'}}>
            <Grid item xs='auto' p={2}>
            <Typography variant="h4">
                Hello, my name is
            </Typography>
            <Typography variant="h1" color="primary">
                Tim van Maren
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 'sm'}} color="text.secondary">
                I am a Computing Science student at the University of Alberta and currently employed as a Full Stack Developer Intern with the Government of Alberta, working to provide Albertans with trusted digital services. 
            </Typography>
            </Grid>
        </Grid>
    )
}

export default Home