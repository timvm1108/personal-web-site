import React from "react";
import { Tabs, Tab, Avatar, AppBar, Grid, Toolbar, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from '../images/logomaterial.png';
import { useLocation } from 'react-router-dom';

const Navbar = (props) => {

    const {drawerWidth} = props

    const location = useLocation().pathname

    return (
        <AppBar position="fixed"
            sx={{
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
            }}
        >
            <Toolbar>
                <Grid container direction="row-reverse" alignItems="center" >
                    <Box  pl={2}>
                        <Avatar src={logo}/>
                    </Box>
                    <Tabs value={location} centered>
                        <Tab label="0. Home" value="/" to="/" component={NavLink}/>
                        <Tab label="1. About" value="/about" to="/about" component={NavLink}/>
                        <Tab label="2. Experience" value="/experience" to="/experience" component={NavLink}/>
                        <Tab label="3. Aviation" value="/aviation" to="/aviation" component={NavLink}/>
                    </Tabs>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar