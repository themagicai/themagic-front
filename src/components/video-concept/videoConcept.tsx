import React from 'react';
import { Box, Typography } from '@mui/material';
import Arrows from '../../assets/images/arrow.png';
import styles from './styles.module.scss';

export const VideoConcept = () => {
    return (
        <Box className={styles.video}>
            <Box className={styles.Box}>
                <Box className={styles.title}>
                    <Typography className={styles.Typography} variant="h4">
                        How to use
                    </Typography>
                    <img src={Arrows} alt="arrow" />
                </Box>
                <iframe src="" allowFullScreen></iframe>
            </Box>
        </Box>
    );
};
