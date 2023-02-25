import React, { CSSProperties } from "react";
import error404 from "../../assets/images/error.png";
import { Box } from "@mui/material";

const styles: CSSProperties = {
    textAlign: "center",
};

export const ErrorPage = () => {
    return (
        <Box className="error" style={styles}>
            <img width={645} src={error404} />
        </Box>
    );
};
