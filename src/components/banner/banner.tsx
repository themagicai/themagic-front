import React from "react";
import "./styles.scss";
import { Button } from "@mui/material";
import shape from "../../assets/images/Shape.png";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="con-left">
                <div className="con-text">
                    <h1>The magic AI</h1>
                    <br />
                    <p>
                        Get the job you want using AI. <br />
                        write faster, think bigger and improve <br />
                        your careativity with the power of magic.
                    </p>
                </div>
                <Button className="Button" variant="contained">
                    Try now
                </Button>
            </div>
            <div className="con-right">
                <img src={shape} alt="Shape logo" />
            </div>
        </div>
    );
};
