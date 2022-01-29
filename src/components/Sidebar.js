import React from "react";
import { Drawer, Stack, Avatar, IconButton, Divider, Box, Typography } from "@mui/material"
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import headshot from "../images/main_headshot.jpg";

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        maxHeight: '100vh',
        flexDirection: 'column',
    },
})

const Sidebar = () => {

    return (
        <Drawer variant="permanent" anchor="left" style={styles.drawer}>
            <Stack justifyContent="center" alignItems="center" pt={4} pl={4} pr={4}>
                <Avatar src={headshot} sx={{height: '100px', width: '100px'}}/>
                <Box pt={2}/>
                <Divider flexItem/>
                <IconButton aria-label="email" color="primary" size="large" href="mailto:timvanmaren@hotmail.com">
                    <Email fontSize="large"/>
                </IconButton>
                <IconButton aria-label="linkedin" color="primary" size="large"component="a" target="linkedin" href="https://www.linkedin.com/in/tim-van-maren-454a43201/">
                    <LinkedIn fontSize="large"/>
                </IconButton>
                <IconButton aria-label="github" color="primary" size="large" component="a" target="github" href="https://github.com/timvm1108">
                    <GitHub fontSize="large"/>
                </IconButton>
                <Divider flexItem/>
                <Box pt={2}/>
                <Typography variant="body" color="text.secondary">
                    Built by
                </Typography>
                <Typography variant="body" color="text.secondary">
                    Tim van Maren
                </Typography>
            </Stack>
        </Drawer>
    )
}

export default Sidebar