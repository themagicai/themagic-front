import React from "react";
import { Box, Button, Typography } from "@mui/material";
import shape from "../../assets/images/Shape.png";
import styles from "./styles.module.scss";

export const Banner = () => {
    return (
        <Box className={styles.banner}>
            <Box className={styles.containerLeft}>
                <Box className={styles.containerText}>
                    <Typography className={styles.Typography} variant="h1">
                        The magic AI
                    </Typography>
                    <Typography>
                        Get the job you want using AI. <br />
                        write faster, think bigger and improve <br />
                        your careativity with the power of magic.
                    </Typography>
                </Box>
                <Button className={styles.Button} variant="contained">
                    Try now
                </Button>
            </Box>
            <img src={shape} alt="Shape logo" />
        </Box>
    );
};
