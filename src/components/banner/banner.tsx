import React from "react";
import "./styles.scss";
import { Box, Button } from "@mui/material";
import shape from "../../assets/images/Shape.png";

export const Banner = () => {
    return (
        <Box className="banner">
            <Box className="con-left">
                <Box className="con-text">
                    <h1>The magic AI</h1>
                    <br />
                    <p>
                        Get the job you want using AI. <br />
                        write faster, think bigger and improve <br />
                        your careativity with the power of magic.
                    </p>
                </Box>
                <Button className="Button" variant="contained">
                    Try now
                </Button>
            </Box>
            <img src={shape} alt="Shape logo" />
        </Box>
    );
};
