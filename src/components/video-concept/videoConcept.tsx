import React from "react";
import "./styles.scss";
import { Box } from "@mui/system";
import Arrows from "../../assets/images/arrow.png";

export const VideoConcept = () => {
    return (
        <div className="video">
            <Box className="Box">
                <div className="title">
                    <h1>How to use</h1>
                    <img src={Arrows} alt="arrow" />
                </div>
                <iframe
                    src="https://www.youtube.com/embed/"
                    allowFullScreen
                >
                    <h1>video</h1>
                </iframe>
            </Box>
        </div>
    );
};
