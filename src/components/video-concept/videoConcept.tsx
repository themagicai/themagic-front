import React from "react";
import "./styles.scss";
import { Box } from "@mui/system";
import Arrows from "../../assets/images/arrow.png";

export const VideoConcept = () => {
    return (
        <Box className="video">
            <Box className="Box">
                <Box className="title">
                    <h1>How to use</h1>
                    <img src={Arrows} alt="arrow" />
                </Box>
                <iframe
                    src="https://www.youtube.com/embed/"
                    allowFullScreen
                >
                    <h1>video</h1>
                </iframe>
            </Box>
        </Box>
    );
};
