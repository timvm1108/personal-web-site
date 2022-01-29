import React from "react";
import { Typography } from "@mui/material";

const BoldWord = (props) => {
    const {word, variant = "body1"} = props

    return (
        <Typography component="span" display="inline" variant={variant} color="primary">{word}</Typography>
    )
}

export default BoldWord