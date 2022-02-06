import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Aviation from "./Aviation";


const MainContent = (props) => {

    const {drawerWidth} = props

    return (
        <Box sx={{width: {sm: `calc(100% - ${drawerWidth}px)`, ml: {sm: `${drawerWidth}px`}}}}>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/aviation" element={<Aviation />}/>
            </Routes>
        </Box>
    )
}

export default MainContent;