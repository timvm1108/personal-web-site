import { Typography, Box } from "@mui/material";
import React from "react";

const ExperiencePanel = (props) => {
    const {value, index, ...remainingProps} = props

    return (
        <div hidden={value !== index} {...remainingProps}>
            {value === index && (
                <Box sx={{p:2}}>
                    {props.children}
                </Box>
            )}
        </div>
    )
}

export default ExperiencePanel