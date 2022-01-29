import React from "react";
import { Tabs, Tab, Avatar, AppBar, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from '../images/logomaterial.png';
import { useLocation } from 'react-router-dom';

const styles = (theme => ({
    navbar: {
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: '173px',
    },
}))

const Navbar = (props) => {

    const location = useLocation().pathname

    return (
        <AppBar position="sticky" style={styles.navbar}>
                <Grid container direction="row-reverse" justify="flex-start" alignItems="center" spacing={1}>
                    <Grid item m={2} pr={1}>
                        <Avatar src={logo}/>
                    </Grid>
                    <Grid item>
                        <Tabs value={location} centered>
                            <Tab label="0. Home" value="/" to="/" component={NavLink}/>
                            <Tab label="1. About" value="/about" to="/about" component={NavLink}/>
                            <Tab label="2. Experience" value="/experience" to="/experience" component={NavLink}/>
                            <Tab label="3. Aviation" value="/aviation" to="/aviation" component={NavLink}/>
                        </Tabs>
                    </Grid>
                </Grid>
        </AppBar>
    )
}

export default Navbar