import React from 'react';
import { Box, Button } from '@mui/material';
import shape from '../../assets/images/Shape.png';
import styles from './styles.module.scss';

export const Banner = () => {
    return (
        <Box className={styles.banner}>
            <Box className={styles.containerLeft}>
                <Box className={styles.containerText}>
                    <h1>The magic AI</h1>
                    <br />
                    <p>
                        Get the job you want using AI. <br />
                        write faster, think bigger and improve <br />
                        your careativity with the power of magic.
                    </p>
                </Box>
                <Button className={styles.Button} variant="contained">
                    Try now
                </Button>
            </Box>
            <img src={shape} alt="Shape logo" />
        </Box>
    );
};
