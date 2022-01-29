import React from "react";
import { Typography, Divider, Box } from "@mui/material";

const Header = (props) => {
    const {text} = props

    return (
        <div>
            <Typography variant="h4" color="primary">
                {text}
            </Typography>
            <Divider/>
            <Box pt={2}/>
        </div>
    )
}

export default Header