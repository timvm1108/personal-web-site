import React from "react";
import { Drawer, Stack, Avatar, IconButton, Divider, Box, Typography } from "@mui/material"
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import headshot from "../images/main_headshot.jpg";

const Sidebar = (props) => {

    const {drawerWidth, open, onSwitch} = props

    const drawerContents = (
        <Stack justifyContent="center" alignItems="center" pt={4} pl={4} pr={4}>
        <Avatar src={headshot} sx={{height: '100px', width: '100px'}}/>
        <Box pt={2}/>
        <Divider flexItem/>
        <IconButton aria-label="email" color="primary" size="large" href="mailto:tim.vanmaren@outlook.com">
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
        <Typography variant="body" align="center" color="text.secondary">
            Tim <br/> van Maren
        </Typography>
        </Stack>
    )

    return (
        <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
            <Drawer disableScrollLock variant="temporary" open={open} onClose={onSwitch}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: {xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: "100%" },
                }}
            >
                {drawerContents}
            </Drawer>
            <Drawer variant="permanent" anchor="left"  
                sx={{
                    display: {xs: 'none', sm: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawerContents}
            </Drawer>
        </Box>
    )
}

export default Sidebar