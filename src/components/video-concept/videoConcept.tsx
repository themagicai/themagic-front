import React from "react";
import "./styles.scss";
import { Box } from "@mui/system";
import vector1 from "../../assets/images/vector-1.png";
import vector2 from "../../assets/images/vector-2.png";
import vector3 from "../../assets/images/vector-3.png";

export const VideoConcept = () => {
    return (
        <div className="video">
            <Box className="Box">
                <div className="title">
                    <h1>How to use</h1>
                    <div className="vectors">
                        <img src={vector1} alt="vector 1" />
                        <img src={vector2} alt="vector 1" />
                        <img src={vector3} alt="vector 1" />
                    </div>
                </div>
                <iframe
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                    allowFullScreen
                >
                    <h1>video</h1>
                </iframe>
            </Box>
        </div>
    );
};
