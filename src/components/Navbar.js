import React, { useState } from "react";
import { Tabs, Tab, Avatar, AppBar, Menu, Toolbar, Box, IconButton, Grid, MenuItem, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from '../images/logomaterial.png';
import { useLocation } from 'react-router-dom';
import { MenuOutlined } from "@mui/icons-material";

const locations = {
    "/": "0. Home",
    "/about": "1. About",
    "/experience": "2. Experience",
    "/aviation": "3. Aviation",
}

const Navbar = (props) => {

    const {drawerWidth, onSwitch} = props
    const [anchorElement, setAnchorElement] = useState(null)
    const open = Boolean(anchorElement)

    const location = useLocation().pathname

    const handleClick = (event) => {
        setAnchorElement(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorElement(null)
    }

    return (
        <AppBar position="sticky"
            sx={{
                width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`},
            }}
        >
            <Toolbar>
                <IconButton color="inherit" justify="left" onClick={onSwitch}
                        sx={{
                            display: {sm:"none"},
                        }}
                >
                    <MenuOutlined/>
                </IconButton>

                <Grid container wrap="nowrap" direction="row-reverse" alignItems="center" justifyContent="flex-start">
                    <Box pl={2}>
                        <Avatar src={logo}/>
                    </Box>
                    <Tabs value={location} variant="scrollable" sx={{display: {xs: "none", sm: "block"}}}>
                        <Tab label="0. Home" value="/" to="/" component={NavLink}/>
                        <Tab label="1. About" value="/about" to="/about" component={NavLink}/>
                        <Tab label="2. Experience" value="/experience" to="/experience" component={NavLink}/>
                        <Tab label="3. Aviation" value="/aviation" to="/aviation" component={NavLink}/>
                    </Tabs>
                    <Button onClick={handleClick} sx={{display: {xs: "block", sm: "none"}}}>
                        {locations[location]}
                    </Button>
                    <Menu open={open} anchorEl={anchorElement} onClose={handleClose}>
                        <MenuItem onClick={handleClose} selected={locations[location] === locations["/"]} to="/" component={NavLink}>
                            0. Home
                        </MenuItem>
                        <MenuItem onClick={handleClose} selected={locations[location] === locations["/about"]} to="/about" component={NavLink}>
                            1. About
                        </MenuItem>
                        <MenuItem onClick={handleClose} selected={locations[location] === locations["/experience"]} to="/experience" component={NavLink}>
                            2. Experience
                        </MenuItem>
                        <MenuItem onClick={handleClose} selected={locations[location] === locations["/aviation"]} to="/aviation" component={NavLink}>
                            3. Aviation
                        </MenuItem>
                    </Menu>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar